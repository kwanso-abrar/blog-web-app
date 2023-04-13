import { ChatContextType } from 'types';
import { initChatRelatedState } from 'reducers';
import { createContext, useContext } from 'react';

export const ChatContext = createContext<ChatContextType>({
  chatRelatedInfo: initChatRelatedState(),
  dispatchChatRelatedInfoAction: () => {}
});

export const useChatContext = () => useContext(ChatContext);
