import { useChatContext } from 'contexts/ChatContext';
import { Box, Stack, Typography } from '@mui/material';
import { ChatBox, ShowOnlineUsers } from 'components';
import { TITLE_WITH_BORDER_BOTTOM } from 'styles/constants';
import { ChatBoxContainer, ShowOnlineUsersContainer } from 'styles';

export const Messenger = () => {
  const { chatRelatedInfo } = useChatContext();

  console.log('chatRelatedInfo', chatRelatedInfo);

  return (
    <Box>
      <Typography variant="h1" sx={TITLE_WITH_BORDER_BOTTOM}>
        Messenger
      </Typography>

      <Stack direction="row" justifyContent="space-between">
        <ShowOnlineUsersContainer>
          <ShowOnlineUsers onlineUsers={chatRelatedInfo?.onlineUsers || []} />
        </ShowOnlineUsersContainer>

        <ChatBoxContainer>
          <ChatBox />
        </ChatBoxContainer>
      </Stack>
    </Box>
  );
};
