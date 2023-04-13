import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useForm } from 'react-hook-form';
import { Box, Stack } from '@mui/material';
import { ChatBoxProps } from 'types';
import { ChatThreadCard, PrimaryInputField } from 'components';
import { ChatBoxMessageArea, SecondaryButton } from 'styles';

export const ChatBox = ({ data }: ChatBoxProps) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      message: ''
    }
  });

  const onFormSubmit = async (values: any) => {
    console.log('values', values);
  };

  console.log('Chat Box', data);

  return (
    <Stack sx={{ width: '80%' }}>
      <ChatBoxMessageArea>
        {data?.chat.messages.map((messageObj) => (
          <ChatThreadCard
            userName={
              messageObj.senderId === data.currentUser.userId
                ? data.currentUser.name
                : data.otherUser.name
            }
            message={messageObj.message}
            key={messageObj.time}
          />
        ))}
        {/* <ChatThreadCard userName="me" message="Hi there!" />
        <ChatThreadCard userName="ShahZaib" message="Hi there! How are you?" />
        <ChatThreadCard userName="me" message="Doing good" />
        <ChatThreadCard userName="me" message="Tell me about you" />
        <ChatThreadCard userName="ShahZaib" message="Same here" /> */}
      </ChatBoxMessageArea>

      <Box sx={{ width: '100%', marginTop: '10px' }}>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Stack direction="row">
            <PrimaryInputField name="text" control={control} label="" />
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
