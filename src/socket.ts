import { io } from 'socket.io-client';
import { SOCKET_URL } from './constants';

export const createSocketConnection = (token: string) => {
  return io(SOCKET_URL, {
    extraHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
};
