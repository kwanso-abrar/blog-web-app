import { Chat, ChatInfo, OnlineUser } from 'types';
import { getCurrentUser, updateOnlineUsers } from 'utils';

export enum Chat_Action {
  ADD_CHAT = 'addChat',
  UPDATE_CURRENT_USER = 'updateCurrentUser',
  UPDATE_ONLINE_USERS = 'updateOnlineUsers',
  UPDATE_SELECTED_CHAT_THREAD = 'updateSelectedChatThread'
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

type UpdateSelectedChatThreadAction = {
  type: Chat_Action.UPDATE_SELECTED_CHAT_THREAD;
  payload: {
    userId: string;
  };
};

type AddChatAction = {
  type: Chat_Action.ADD_CHAT;
  payload: {
    chat: Chat;
  };
};

export type ChatAction =
  | AddChatAction
  | UpdateOnlineUserAction
  | UpdateCurrentOnlineUserAction
  | UpdateSelectedChatThreadAction;

export const initChatRelatedState = (): ChatInfo => {
  return {
    chats: [],
    onlineUsers: [],
    currentOnlineUser: null,
    selectedChatThread: ''
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
    case Chat_Action.UPDATE_SELECTED_CHAT_THREAD: {
      const { userId } = payload;
      return { ...state, selectedChatThread: userId };
    }
    case Chat_Action.ADD_CHAT: {
      const { chat } = payload;
      const filteredChats = state.chats.filter(
        (existedChat) => existedChat.roomName !== chat.roomName
      );
      return { ...state, chats: [...filteredChats, chat] };
    }
    default:
      return state;
  }
};
