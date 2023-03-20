import { Box, Typography } from '@mui/material';
import { BlogCard } from 'components';
import { TITLE_WITH_BORDER_BOTTOM } from 'styles/constants';

export const Home = () => (
  <Box>
    <Typography variant="h1" sx={TITLE_WITH_BORDER_BOTTOM}>
      Recent Posts
    </Typography>
    <Box marginTop="60px">
      <BlogCard />
    </Box>
  </Box>
);
