import { Typography } from '@mui/material';
import { TITLE_WITH_BORDER_BOTTOM } from 'styles/constants';

export const ChatPlayground = () => {
  return (
    <Typography variant="h1" sx={TITLE_WITH_BORDER_BOTTOM}>
      Chat Playground - Experiments with Socket io library
    </Typography>
  );
};
