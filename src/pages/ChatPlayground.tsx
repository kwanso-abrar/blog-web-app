import { useChatContext } from 'contexts/ChatContext';
import { Box, Stack, Typography } from '@mui/material';
import { ChatBox, ShowOnlineUsers } from 'components';
import { TITLE_WITH_BORDER_BOTTOM } from 'styles/constants';
import { ChatBoxContainer, ShowOnlineUsersContainer } from 'styles';

export const ChatPlayground = () => {
  const { onlineUsers } = useChatContext();

  return (
    <Box>
      <Typography variant="h1" sx={TITLE_WITH_BORDER_BOTTOM}>
        Chat Playground
      </Typography>

      <Stack direction="row" justifyContent="space-between">
        <ShowOnlineUsersContainer>
          <ShowOnlineUsers onlineUsers={onlineUsers} />
        </ShowOnlineUsersContainer>

        <ChatBoxContainer>
          <ChatBox />
        </ChatBoxContainer>
      </Stack>
    </Box>
  );
};
