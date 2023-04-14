import { ChatContextType } from 'types';
import { createContext, useContext } from 'react';

export const ChatContext = createContext<ChatContextType>({
  chats: [],
  onlineUsers: [],
  currentOnlineUser: null,
  selectedChatThread: ' ',
  dispatchChatRelatedInfoAction: () => {}
});

export const useChatContext = () => useContext(ChatContext);
