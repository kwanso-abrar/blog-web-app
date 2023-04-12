import { OnlineUser } from 'types';
import { Chat_Action } from 'reducers';
import { useCallback } from 'react';
import { useAppContext } from 'contexts';
import { useChatContext } from 'contexts/ChatContext';
import { SOCKET_EVENT_EMITTER } from '../constants';
import { Box, Stack, Typography } from '@mui/material';
import { ChatBox, ShowOnlineUsers } from 'components';
import { TITLE_WITH_BORDER_BOTTOM } from 'styles/constants';
import { ChatBoxContainer, ShowOnlineUsersContainer } from 'styles';

export const Messenger = () => {
  const { socketConnection } = useAppContext();
  const { chatRelatedInfo, dispatchChatRelatedInfoAction } = useChatContext();

  const onSelectChatThread = useCallback((onlineUser: OnlineUser) => {
    if (chatRelatedInfo && chatRelatedInfo.currentOnlineUser) {
      socketConnection?.emit(SOCKET_EVENT_EMITTER.joinRoom, {
        userId: chatRelatedInfo.currentOnlineUser.userId,
        roomName: `${chatRelatedInfo.currentOnlineUser.userId}&${onlineUser.userId}`,
        userName: chatRelatedInfo.currentOnlineUser.name,
        senderSocketId: chatRelatedInfo.currentOnlineUser.socketId,
        receiverSocketId: onlineUser.socketId
      });
    }

    dispatchChatRelatedInfoAction({
      type: Chat_Action.UPDATE_SELECTED_CHAT_THREAD,
      payload: {
        userId: onlineUser.userId
      }
    });
  }, []);

  console.log('rooms: ', chatRelatedInfo?.chats);

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
