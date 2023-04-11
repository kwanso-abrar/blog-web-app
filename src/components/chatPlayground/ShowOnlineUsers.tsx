import { OnlineUserCard } from 'components';
import { Box, Typography } from '@mui/material';
import { ShowOnlineUsersProps } from 'types';

export const ShowOnlineUsers = ({ onlineUsers }: ShowOnlineUsersProps) => (
  <>
    <Typography variant="h2">Your Chats:</Typography>

    <Box sx={{ marginTop: '30px' }}>
      {onlineUsers.map((onlineUser, index) => (
        <Box
          key={onlineUser.socketId + onlineUser.userId}
          sx={{ marginTop: index === 0 ? '0px' : '15px' }}
        >
          <OnlineUserCard userName={onlineUser.name} />
        </Box>
      ))}
    </Box>
  </>
);
