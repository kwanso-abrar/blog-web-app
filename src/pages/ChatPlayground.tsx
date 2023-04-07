import { Box, Typography } from '@mui/material';
import { TITLE_WITH_BORDER_BOTTOM } from 'styles/constants';

export const ChatPlayground = () => {
  return (
    <Box>
      <Typography variant="h1" sx={TITLE_WITH_BORDER_BOTTOM}>
        Chat Playground - Experiments with Socket io library
      </Typography>
      <Box marginTop={'50px'}>
        <Typography variant="h2">Online Users:</Typography>
      </Box>
    </Box>
  );
};
