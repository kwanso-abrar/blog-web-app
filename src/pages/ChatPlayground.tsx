import { useChatContext } from 'contexts/ChatContext';
import { Box, Stack, Typography } from '@mui/material';
import { ChatBox, ShowOnlineUsers } from 'components';
import { TITLE_WITH_BORDER_BOTTOM } from 'styles/constants';

export const ChatPlayground = () => {
  const { onlineUsers } = useChatContext();

  return (
    <Box>
      <Typography variant="h1" sx={TITLE_WITH_BORDER_BOTTOM}>
        Chat Playground - Experiments with Socket io library
      </Typography>

      <Stack direction="row">
        <Box marginTop={'50px'} sx={{ width: '30%' }}>
          <ShowOnlineUsers onlineUsers={onlineUsers} />
        </Box>

        <Box sx={{ flexGrow: '1', marginTop: '50px', border: '1px solid red' }}>
          <ChatBox />
        </Box>
      </Stack>
    </Box>
  );
};
