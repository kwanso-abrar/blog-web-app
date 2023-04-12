import { ChatInfo, OnlineUser } from 'types';
import { getCurrentUser, updateOnlineUsers } from 'utils';

export enum Chat_Action {
  UPDATE_ONLINE_USERS = 'updateOnlineUsers',
  UPDATE_CURRENT_USER = 'updateCurrentUser'
}

type UpdateOnlineUserAction = {
  type: Chat_Action.UPDATE_ONLINE_USERS;
  payload: {
    onlineUsers: OnlineUser[];
    mySocketId: string;
  };
};

type UpdateCurrentOnlineUserAction = {
  type: Chat_Action.UPDATE_CURRENT_USER;
  payload: {
    onlineUsers: OnlineUser[];
    mySocketId: string;
  };
};

export type ChatAction = UpdateOnlineUserAction | UpdateCurrentOnlineUserAction;

export const initChatRelatedState = (): ChatInfo => {
  return {
    onlineUsers: [],
    currentOnlineUser: null
  };
};

export const chatReducer = (state: ChatInfo, action: ChatAction): ChatInfo => {
  const { type, payload } = action;

  switch (type) {
    case Chat_Action.UPDATE_ONLINE_USERS: {
      const { onlineUsers, mySocketId } = payload;
      return { ...state, onlineUsers: updateOnlineUsers(onlineUsers, mySocketId) };
    }
    case Chat_Action.UPDATE_CURRENT_USER: {
      const { onlineUsers, mySocketId } = payload;
      return { ...state, currentOnlineUser: getCurrentUser(onlineUsers, mySocketId) };
    }
    default:
      return state;
  }
};
