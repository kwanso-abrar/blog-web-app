import { ChatContextType, User } from 'types';
import { createContext, useContext } from 'react';

export const ChatContext = createContext<ChatContextType>({
  currentUser: {} as User,
  onlineUsers: []
});

export const useChatContext = () => useContext(ChatContext);
