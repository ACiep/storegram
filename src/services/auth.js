import { tdClient } from '../tdlib';

export const setAuthenticationPhoneNumber = phoneNumber => (
	tdClient.send('setAuthenticationPhoneNumber', { phone_number: phoneNumber })
);

export const checkAuthenticationCode = code => tdClient.send('checkAuthenticationCode', { code });

export const logout = () => tdClient.send('logOut');
