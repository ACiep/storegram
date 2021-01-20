import { get, writable } from 'svelte/store';
import { tdClient } from '../tdlib';
import * as authService from '../services/auth';
import { snakeToCamelCaseKeys } from '../utils/snakeToCamelCase';

export function createUser() {
  const store = writable(null);

  tdClient.once('updateUser', data => {
    store.set(snakeToCamelCaseKeys(data.user));
  });

  const logout = () => authService.logout();

  const getName = () => {
    const self = get(store);
    if (self.firstName === '' && self.lastName === '') {
      return self.username || '';
    } else {
      return `${self.firstName} ${self.lastName}`;
    }
  };

  return {
    subscribe: store.subscribe,
    get: () => get(store),
    logout,
    getName,
  };
}
