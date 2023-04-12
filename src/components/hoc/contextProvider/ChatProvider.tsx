import { ChatContext } from 'contexts/ChatContext';
import { ChatProviderProps } from 'types';
import { useEffect, useReducer } from 'react';
import { chatReducer, initChatRelatedState } from 'reducers';
import { Chat_Action, SOCKET_EVENT_LISTENER } from '../../../constants';

export const ChatProvider = ({ children, socketConnection }: ChatProviderProps) => {
  const [chatRelatedInfo, dispatchChatRelatedInfoAction] = useReducer(
    chatReducer,
    initChatRelatedState()
  );

  useEffect(() => {
    socketConnection?.on(SOCKET_EVENT_LISTENER.onlineUsers, (data: any) => {
      dispatchChatRelatedInfoAction({
        type: Chat_Action.UPDATE_ONLINE_USERS,
        payload: {
          chatRelatedInfo: { onlineUsers: data.users, currentOnlineUser: null },
          mySocketId: socketConnection.id
        }
      });

      dispatchChatRelatedInfoAction({
        type: Chat_Action.UPDATE_CURRENT_USER,
        payload: {
          chatRelatedInfo: { onlineUsers: data.users, currentOnlineUser: null },
          mySocketId: socketConnection.id
        }
      });
    });

    return () => {
      socketConnection?.off(SOCKET_EVENT_LISTENER.onlineUsers);
      socketConnection?.disconnect();
    };
  }, [socketConnection]);

  return <ChatContext.Provider value={{ chatRelatedInfo }}>{children}</ChatContext.Provider>;
};
