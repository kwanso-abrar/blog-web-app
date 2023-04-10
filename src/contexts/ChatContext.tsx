import { ChatContextType } from 'types';
import { createContext, useContext } from 'react';

export const ChatContext = createContext<ChatContextType>({
  onlineUsers: [],
  setOnlineUsers: () => {}
});

export const useChatContext = () => useContext(ChatContext);
