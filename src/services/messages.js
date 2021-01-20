import { tdClient } from '../tdlib';

export const getChats = limit => tdClient.send('getChats', { limit });

export const getAllMessages = async (chat_id, fetched = [], from_message_id) => {
  const params = {
    chat_id,
    limit: 100,
    from_message_id,
  };
  const res = await tdClient.send('searchChatMessages', params);
  const messages = fetched.concat(res.messages);

  if (res.total_count > messages.length) {
    const lastMessageId = messages[messages.length - 1].id;
    return messages;
    // TODO
    //return await getAllMessages(
      //chat_id,
      //messages,
      //lastMessageId,
    //);
  } else {
    return messages;
  }
};

// TODO cache
export const initMessages = async chatId => {
  await getChats(100);
  const allMessages = localStorage.getItem('messages');
  if (allMessages) {
    return JSON.parse(allMessages);
  } else {
    const data = await getAllMessages(chatId);
    localStorage.setItem('messages', JSON.stringify(data));
    return data;
  }
};
