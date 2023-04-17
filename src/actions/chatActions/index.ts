import { ChatAction, Chat_Action } from 'reducers';

export const updateOnlineUsers = (onlineUsers: any, mySocketId: string): ChatAction => {
  return {
    type: Chat_Action.UPDATE_ONLINE_USERS,
    payload: {
      onlineUsers: onlineUsers.users,
      mySocketId: mySocketId
    }
  };
};

export const updateCurrentUser = (onlineUsers: any, mySocketId: string): ChatAction => {
  return {
    type: Chat_Action.UPDATE_CURRENT_USER,
    payload: {
      onlineUsers: onlineUsers.users,
      mySocketId: mySocketId
    }
  };
};

export const addChat = (data: any): ChatAction => {
  return {
    type: Chat_Action.ADD_CHAT,
    payload: {
      chat: data
    }
  };
};

export const addNewMessageInChat = (data: any): ChatAction => {
  return {
    type: Chat_Action.ADD_NEW_MESSAGE_IN_CHAT,
    payload: {
      chat: data
    }
  };
};
