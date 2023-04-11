import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useForm } from 'react-hook-form';
import { Box, Stack } from '@mui/material';
import { ChatThreadCard, PrimaryInputField } from 'components';
import { ChatBoxMessageArea, SecondaryButton } from 'styles';

export const ChatBox = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      message: ''
    }
  });

  const onFormSubmit = async (values: any) => {
    console.log('values', values);
  };

  return (
    <Stack sx={{ width: '80%' }}>
      <ChatBoxMessageArea>
        <ChatThreadCard userName="Abrar" message="Hi there!" />
        <ChatThreadCard userName="ShahZaib" message="Hi there! How are you?" />
        <ChatThreadCard userName="Abrar" message="Doing good" />
        <ChatThreadCard userName="Abrar" message="Tell me about you" />
        <ChatThreadCard userName="ShahZaib" message="Same here" />
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
