import { OnlineUser, User, UserAction } from 'types';

const getCurrentUser = (onlineUsers: OnlineUser[], mySocketId: string): User => {
  const allOnlineUsers: OnlineUser[] = onlineUsers.map((user: any) => {
    return {
      name: user.data.name,
      userId: user.userId,
      socketId: user.data.socketId
    };
  });

  const currentUser = allOnlineUsers.find((data) => data.socketId === mySocketId);
  return currentUser as User;
};

export const UserReducer = (state: User, action: UserAction): User => {
  const {
    type,
    payload: { onlineUsers, mySocketId }
  } = action;

  switch (type) {
    case 'save': {
      const currentUser = getCurrentUser(onlineUsers, mySocketId);
      return { ...state, ...currentUser };
    }
    default:
      return state;
  }
};
