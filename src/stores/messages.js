import { writable } from 'svelte/store';
import {
  always,
  assoc,
  concat,
  evolve,
  map,
  pick,
  pipe,
  propEq,
  reject,
} from 'ramda';
import * as messagesService from '../services/messages';

const initState = {
  loading: false,
  error: null,
  data: [],
};

const transformContent = content => {
  if (content['@type'] !== 'messageText') {
    return null;
  }
  return {
    text: content.text.text,
  };
};

const transformMessage = msg => pipe(
  pick(['id', 'date']),
  assoc('content', transformContent(msg.content)),
)(msg);

const isContentNil = propEq('content', null);

const tmpFilterNilContent = reject(isContentNil);

export function createMessages(user) {
  const store = writable(initState);

  const init = async () => {
    if (!user) return; // TODO throw error
    store.update(assoc('loading', true));
    try {
      const data = await messagesService.initMessages(user.get().id);
      store.update(evolve({
        loading: always(false),
        error: always(null),
        data: pipe(
          concat(data),
          map(transformMessage),
          tmpFilterNilContent,
        ),
      }));
    } catch (error) {
      store.update(assoc('error', error));
    }
  };

  return {
    subscribe: store.subscribe,
    init,
  };
}
