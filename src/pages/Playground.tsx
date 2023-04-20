import { Box, Stack, Typography } from '@mui/material';
import { DisplayBlogComments, SelectBlog } from 'components';
import { TITLE_WITH_BORDER_BOTTOM } from 'styles/constants';

export const Playground = () => (
  <Box>
    <Typography variant="h1" sx={TITLE_WITH_BORDER_BOTTOM}>
      Play ground: For Developers Only
    </Typography>

    <Stack direction="row" sx={{ marginTop: '35px' }}>
      <Box sx={{ width: '30%' }}>
        <SelectBlog />
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <DisplayBlogComments />
      </Box>
    </Stack>
  </Box>
);
