import { BlogCard } from 'components';
import { Box, Typography } from '@mui/material';
import { HOME_PAGE_BLOGS } from 'stub';
import { TITLE_WITH_BORDER_BOTTOM } from 'styles/constants';

export const Home = () => (
  <Box>
    <Typography variant="h1" sx={TITLE_WITH_BORDER_BOTTOM}>
      Recent Posts
    </Typography>
    <Box marginTop="60px">
      {HOME_PAGE_BLOGS.map((blog, index) => (
        <BlogCard
          styles={{ marginTop: index > 0 ? '64px' : '0px' }}
          key={blog.id}
          tag={blog.tag}
          date={blog.date}
          text={blog.text}
          title={blog.title}
          author={blog.author}
          duration={blog.duration}
          thumbnail={blog.thumbnail}
          authorAvatar={blog.authorAvatar}
        />
      ))}
    </Box>
  </Box>
);
