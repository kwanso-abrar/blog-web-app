import { ChatContext } from 'contexts/ChatContext';
import { ChatProviderProps } from 'types';
import { onlineUsersReducer } from 'reducers';
import { SOCKET_EVENT_LISTENER } from '../../../constants';
import { useEffect, useReducer } from 'react';

export const ChatProvider = ({ children, socketConnection }: ChatProviderProps) => {
  const [onlineUsers, dispatchOnlineUsersAction] = useReducer(onlineUsersReducer, []);

  useEffect(() => {
    socketConnection?.on(SOCKET_EVENT_LISTENER.onlineUsers, (data: any) => {
      dispatchOnlineUsersAction({
        type: 'update',
        payload: { onlineUsers: data.users, mySocketId: socketConnection.id }
      });
    });

    return () => {
      socketConnection?.off(SOCKET_EVENT_LISTENER.onlineUsers);
      socketConnection?.disconnect();
    };
  }, [socketConnection]);

  return (
    <ChatContext.Provider value={{ onlineUsers }}>
      <>{children}</>
    </ChatContext.Provider>
  );
};
