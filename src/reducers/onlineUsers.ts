import { OnlineUser, OnlineUserAction } from 'types';

const updateOnlineUsers = (onlineUsers: OnlineUser[], mySocketId: string): Array<OnlineUser> => {
  const allOnlineUsers: OnlineUser[] = onlineUsers.map((user: any) => {
    return {
      name: user.data.name,
      userId: user.userId,
      socketId: user.data.socketId
    };
  });

  const updatedOnlineUsers = allOnlineUsers.filter((data) => data.socketId !== mySocketId);
  return updatedOnlineUsers;
};

export const onlineUsersReducer = (
  state: OnlineUser[],
  action: OnlineUserAction
): Array<OnlineUser> => {
  const {
    type,
    payload: { onlineUsers, mySocketId }
  } = action;

  switch (type) {
    case 'update': {
      const updatedOnlineUsers = updateOnlineUsers(onlineUsers, mySocketId);
      return [...updatedOnlineUsers];
    }
    default:
      return state;
  }
};
