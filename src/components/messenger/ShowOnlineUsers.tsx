import { Fragment } from 'react';
import { Box, Divider } from '@mui/material';
import { OnlineUserCard } from 'components';
import { ShowOnlineUsersProps } from 'types';

export const ShowOnlineUsers = ({ onlineUsers }: ShowOnlineUsersProps) => (
  <Box>
    {onlineUsers.map((onlineUser) => (
      <Fragment key={onlineUser.socketId + onlineUser.userId}>
        <Box
          sx={{
            ':hover': { backgroundColor: '#E5E5E5', cursor: 'pointer' },
            padding: '20px 10px 10px 10px',
            position: 'relative'
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              left: '0',
              right: '0',
              top: '0',
              width: '100%',
              height: '101%',
              transform: 'translateX(0,0)',
              ':hover': {
                transform: 'translate(2px, -1px)',
                borderRight: '2px solid #E5E5E5'
              }
            }}
          />
          <OnlineUserCard userName={onlineUser.name} />
        </Box>
        <Divider />
      </Fragment>
    ))}
  </Box>
);
