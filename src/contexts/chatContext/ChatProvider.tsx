import { ChatProviderProps } from 'types';
import { SOCKET_EVENT_LISTENER } from '../../constants';
import { ChatContext, useAppContext } from 'contexts';
import { useEffect, useMemo, useReducer } from 'react';
import { chatReducer, Chat_Action, chatStoreDefaultValue } from 'reducers';

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const { socketConnection } = useAppContext();
  const [chatStore, dispatchChatAction] = useReducer(chatReducer, chatStoreDefaultValue);

  const store = useMemo(() => {
    return { ...chatStore, dispatchChatAction };
  }, [chatStore]);

  useEffect(() => {
    socketConnection?.on(SOCKET_EVENT_LISTENER.onlineUsers, (data: any) => {
      dispatchChatAction({
        type: Chat_Action.UPDATE_ONLINE_USERS,
        payload: {
          onlineUsers: data.users,
          mySocketId: socketConnection.id
        }
      });

      dispatchChatAction({
        type: Chat_Action.UPDATE_CURRENT_USER,
        payload: {
          onlineUsers: data.users,
          mySocketId: socketConnection.id
        }
      });
    });

    socketConnection?.on(SOCKET_EVENT_LISTENER.groupChat, (data) => {
      dispatchChatAction({
        type: Chat_Action.ADD_CHAT,
        payload: {
          chat: data
        }
      });
    });

    socketConnection?.on(SOCKET_EVENT_LISTENER.chat, (data) => {
      dispatchChatAction({
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

  return <ChatContext.Provider value={{ ...store }}>{children}</ChatContext.Provider>;
};
