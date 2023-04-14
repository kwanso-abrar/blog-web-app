import { Box, Divider } from '@mui/material';
import { Fragment, memo } from 'react';
import { OnlineUserCard } from 'components';
import { ShowOnlineUsersProps } from 'types';

const ShowOnlineUsers = ({
  onlineUsers,
  onSelectChatThread,
  selectedChatThread
}: ShowOnlineUsersProps) => (
  <Box>
    {onlineUsers.map((onlineUser) => (
      <Fragment key={onlineUser.socketId + onlineUser.userId}>
        <Box
          onClick={() => onSelectChatThread(onlineUser)}
          sx={{
            ':hover': { backgroundColor: '#E5E5E5', cursor: 'pointer' },
            backgroundColor: selectedChatThread === onlineUser.userId ? '#E5E5E5' : 'initial',
            padding: '20px 10px 10px 10px',
            position: 'relative'
          }}
        >
          <Box
            sx={{
              top: '0',
              left: '0',
              right: '0',
              width: '100%',
              height: '101%',
              zIndex: '1000',
              position: 'absolute',
              transform:
                selectedChatThread === onlineUser.userId
                  ? 'translate(2px, -1px)'
                  : 'translateX(0,0)',
              borderRight: selectedChatThread === onlineUser.userId ? '2px solid #E5E5E5' : ''
            }}
          />
          <OnlineUserCard onlineUser={onlineUser} />
        </Box>
        <Divider />
      </Fragment>
    ))}
  </Box>
);

export default memo(ShowOnlineUsers);
