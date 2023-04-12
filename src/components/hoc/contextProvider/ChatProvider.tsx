import { ChatContext } from 'contexts/ChatContext';
import { SOCKET_EVENT_LISTENER } from '../../../constants';
import { useEffect, useReducer } from 'react';
import { ChatProviderProps, User } from 'types';
import { onlineUsersReducer, UserReducer } from 'reducers';

export const ChatProvider = ({ children, socketConnection }: ChatProviderProps) => {
  const [currentUser, dispatchCurrentUserAction] = useReducer(UserReducer, {} as User);
  const [onlineUsers, dispatchOnlineUsersAction] = useReducer(onlineUsersReducer, []);

  useEffect(() => {
    socketConnection?.on(SOCKET_EVENT_LISTENER.onlineUsers, (data: any) => {
      dispatchCurrentUserAction({
        type: 'save',
        payload: { onlineUsers: data.users, mySocketId: socketConnection.id }
      });
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
    <ChatContext.Provider value={{ onlineUsers, currentUser }}>
      <>{children}</>
    </ChatContext.Provider>
  );
};
