import { Chat_Action } from '../constants';
import { ChatAction, ChatInfo } from 'types';
import { getCurrentUser, updateOnlineUsers } from 'utils';

export const initChatRelatedState = (): ChatInfo => {
  return {
    onlineUsers: [],
    currentOnlineUser: null
  };
};

export const chatReducer = (state: ChatInfo, action: ChatAction): ChatInfo => {
  const {
    type,
    payload: {
      chatRelatedInfo: { onlineUsers },
      mySocketId
    }
  } = action;

  switch (type) {
    case Chat_Action.UPDATE_ONLINE_USERS:
      return { ...state, onlineUsers: updateOnlineUsers(onlineUsers, mySocketId) };
    case Chat_Action.UPDATE_CURRENT_USER:
      return { ...state, currentOnlineUser: getCurrentUser(onlineUsers, mySocketId) };
    default:
      return state;
  }
};
