import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useForm } from 'react-hook-form';
import { Box, Stack } from '@mui/material';
import { ChatBoxProps } from 'types';
import { useAppContext } from 'contexts';
import { SOCKET_EVENT_EMITTER } from '../../constants';
import { ChatThreadCard, PrimaryInputField } from 'components';
import { ChatBoxMessageArea, SecondaryButton } from 'styles';

export const ChatBox = ({ data }: ChatBoxProps) => {
  const { socketConnection } = useAppContext();
  const {
    reset,
    control,
    handleSubmit,
    formState: { isDirty }
  } = useForm({
    defaultValues: {
      message: ''
    }
  });

  const onFormSubmit = async (values: any) => {
    if (isDirty && data && data.chat.roomName) {
      socketConnection?.emit(SOCKET_EVENT_EMITTER.sendMessage, {
        roomName: data.chat.roomName,
        senderId: data.currentUser.userId,
        receiverId: data.otherUser.userId,
        message: values.message,
        timeSent: new Date().getTime()
      });
      reset();
    }
  };

  return (
    <Stack sx={{ width: '80%' }}>
      <ChatBoxMessageArea>
        {data?.chat.messages.map((messageObj) => (
          <ChatThreadCard
            userName={messageObj.senderId === data.currentUser.userId ? 'Me' : data.otherUser.name}
            message={messageObj.message}
            key={messageObj.time}
          />
        ))}
      </ChatBoxMessageArea>

      <Box sx={{ width: '100%', marginTop: '10px' }}>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Stack direction="row">
            <PrimaryInputField name="message" control={control} label="" />
            <SecondaryButton
              sx={{ marginLeft: '10px' }}
              type="submit"
              endIcon={<ArrowForwardIcon />}
              variant="contained"
            >
              Send
            </SecondaryButton>
          </Stack>
        </form>
      </Box>
    </Stack>
  );
};
