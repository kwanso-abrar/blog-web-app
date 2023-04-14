import { Chat, ChatInfo, OnlineUser } from 'types';
import { getCurrentUser, updateOnlineUsers } from 'utils';

export enum Chat_Action {
  ADD_CHAT = 'addChat',
  ON_LOGOUT = 'onLogout',
  UPDATE_CURRENT_USER = 'updateCurrentUser',
  UPDATE_ONLINE_USERS = 'updateOnlineUsers',
  ADD_NEW_MESSAGE_IN_CHAT = 'ADD_NEW_MESSAGE_IN_CHAT',
  ON_UPDATE_SELECTED_CHAT_THREAD = 'onUpdateSelectedChatThread'
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

type OnUpdateSelectedChatThreadAction = {
  type: Chat_Action.ON_UPDATE_SELECTED_CHAT_THREAD;
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

type AddNeWMessageInChaTAction = {
  type: Chat_Action.ADD_NEW_MESSAGE_IN_CHAT;
  payload: { chat: Chat };
};

type OnLogoutChatAction = {
  type: Chat_Action.ON_LOGOUT;
  payload?: undefined;
};

export type ChatAction =
  | AddChatAction
  | OnLogoutChatAction
  | UpdateOnlineUserAction
  | AddNeWMessageInChaTAction
  | UpdateCurrentOnlineUserAction
  | OnUpdateSelectedChatThreadAction;

export const initChatRelatedState = (): ChatInfo => {
  return {
    chats: [],
    onlineUsers: [],
    currentOnlineUser: null,
    selectedChatThread: ' '
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

    case Chat_Action.ON_UPDATE_SELECTED_CHAT_THREAD: {
      const { userId } = payload;
      let allOtherChats: Chat[];
      let selectedUserChatUpdated: Chat;
      let updatedChats: Chat[] | null = null;

      const selectedUserChat = state.chats.find((chat) => chat.roomName.includes(userId));
      if (selectedUserChat) {
        selectedUserChatUpdated = { ...selectedUserChat, notifications: 0 };
        allOtherChats = state.chats.filter((chat) => !chat.roomName.includes(userId));
        updatedChats = [...allOtherChats, selectedUserChatUpdated];
      }

      return {
        ...state,
        chats: updatedChats ? updatedChats : state.chats,
        selectedChatThread: userId
      };
    }

    case Chat_Action.ADD_CHAT:
    case Chat_Action.ADD_NEW_MESSAGE_IN_CHAT: {
      const { chat } = payload;
      let notifications = 0;
      const previousChat = state.chats.find((preChat) => preChat.roomName === chat.roomName);

      if (
        !chat.roomName.includes(state.selectedChatThread) &&
        chat.messages[chat.messages.length - 1]?.senderId !== state.currentOnlineUser?.userId
      ) {
        notifications = previousChat ? previousChat.notifications + 1 : 1;
      }

      const previousChats = state.chats.filter(
        (existedChat) => existedChat.roomName !== chat.roomName
      );
      const updatedChats = { ...chat, notifications };
      return { ...state, chats: [...previousChats, updatedChats] };
    }

    case Chat_Action.ON_LOGOUT: {
      return { chats: [], onlineUsers: [], currentOnlineUser: null, selectedChatThread: '' };
    }

    default:
      return state;
  }
};
