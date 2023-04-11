import { Box, Divider } from '@mui/material';
import { OnlineUserCard } from 'components';
import { ShowOnlineUsersProps } from 'types';

export const ShowOnlineUsers = ({ onlineUsers }: ShowOnlineUsersProps) => (
  <Box>
    {onlineUsers.map((onlineUser) => (
      <>
        <Box
          key={onlineUser.socketId + onlineUser.userId}
          sx={{
            ':hover': { backgroundColor: '#E5E5E5', cursor: 'pointer' },
            padding: '20px 10px 10px 10px'
          }}
        >
          <OnlineUserCard userName={onlineUser.name} />
        </Box>
        <Divider />
      </>
    ))}
  </Box>
);
