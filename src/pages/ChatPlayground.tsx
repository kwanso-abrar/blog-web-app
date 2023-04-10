import { useChatContext } from 'contexts/ChatContext';
import { Box, Typography } from '@mui/material';
import { TITLE_WITH_BORDER_BOTTOM } from 'styles/constants';

export const ChatPlayground = () => {
  const { onlineUsers } = useChatContext();

  return (
    <Box>
      <Typography variant="h1" sx={TITLE_WITH_BORDER_BOTTOM}>
        Chat Playground - Experiments with Socket io library
      </Typography>
      <Box marginTop={'50px'}>
        <Typography variant="h2">Online Users:</Typography>
        <Box sx={{ marginTop: '30px' }}>
          {onlineUsers.map((onlineUser, index) => (
            <Typography
              key={onlineUser.socketId + onlineUser.userId}
              sx={{ marginTop: index === 0 ? '0px' : '15px' }}
            >
              {onlineUser.name}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
