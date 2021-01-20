import { createUser } from './user';
import { createMessages } from './messages';

const user = createUser();
const messages = createMessages(user);

export const store = {
  user,
  messages,
};
