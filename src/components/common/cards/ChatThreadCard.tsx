import { Stack, Typography } from '@mui/material';
import { ChatThreadCardProps } from 'types';

export const ChatThreadCard = ({ message, userName }: ChatThreadCardProps) => {
  return (
    <Stack direction="row">
      <Typography>
        <b>{userName}:</b> &nbsp;
      </Typography>
      <Typography>{message}</Typography>
    </Stack>
  );
};
