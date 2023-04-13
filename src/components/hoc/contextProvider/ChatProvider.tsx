import { ChatContext } from 'contexts/ChatContext';
import { ChatProviderProps } from 'types';
import { SOCKET_EVENT_LISTENER } from '../../../constants';
import { useEffect, useReducer } from 'react';
import { chatReducer, Chat_Action, initChatRelatedState } from 'reducers';

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
          onlineUsers: data.users,
          mySocketId: socketConnection.id
        }
      });

      dispatchChatRelatedInfoAction({
        type: Chat_Action.UPDATE_CURRENT_USER,
        payload: {
          onlineUsers: data.users,
          mySocketId: socketConnection.id
        }
      });
    });

    socketConnection?.on(SOCKET_EVENT_LISTENER.groupChat, (data) => {
      dispatchChatRelatedInfoAction({
        type: Chat_Action.ADD_CHAT,
        payload: {
          chat: data
        }
      });
    });

    socketConnection?.on(SOCKET_EVENT_LISTENER.chat, (data) => {
      dispatchChatRelatedInfoAction({
        type: Chat_Action.ADD_NEW_MESSAGE_IN_CHAT,
        payload: {
          chat: data
        }
      });
    });

    return () => {
      socketConnection?.off(SOCKET_EVENT_LISTENER.chat);
      socketConnection?.off(SOCKET_EVENT_LISTENER.groupChat);
      socketConnection?.off(SOCKET_EVENT_LISTENER.onlineUsers);
      socketConnection?.disconnect();
    };
  }, [socketConnection]);

  return (
    <ChatContext.Provider value={{ chatRelatedInfo, dispatchChatRelatedInfoAction }}>
      {children}
    </ChatContext.Provider>
  );
};
