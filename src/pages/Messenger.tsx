import { OnlineUser } from 'types';
import { Chat_Action } from 'reducers';
import { useCallback } from 'react';
import { useChatContext } from 'contexts/ChatContext';
import { Box, Stack, Typography } from '@mui/material';
import { ChatBox, ShowOnlineUsers } from 'components';
import { TITLE_WITH_BORDER_BOTTOM } from 'styles/constants';
import { ChatBoxContainer, ShowOnlineUsersContainer } from 'styles';

export const Messenger = () => {
  const { chatRelatedInfo, dispatchChatRelatedInfoAction } = useChatContext();

  const onSelectChatThread = useCallback((onlineUser: OnlineUser) => {
    dispatchChatRelatedInfoAction({
      type: Chat_Action.UPDATE_SELECTED_CHAT_THREAD,
      payload: {
        userId: onlineUser.userId
      }
    });
  }, []);

  return (
    <Box>
      <Typography variant="h1" sx={TITLE_WITH_BORDER_BOTTOM}>
        Messenger
      </Typography>

      <Stack direction="row" justifyContent="space-between">
        <ShowOnlineUsersContainer>
          <ShowOnlineUsers
            onlineUsers={chatRelatedInfo?.onlineUsers || []}
            onSelectChatThread={onSelectChatThread}
            selectedChatThread={chatRelatedInfo?.selectedChatThread || ''}
          />
        </ShowOnlineUsersContainer>

        <ChatBoxContainer>
          <ChatBox />
        </ChatBoxContainer>
      </Stack>
    </Box>
  );
};
