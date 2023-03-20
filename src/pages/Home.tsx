import { Box, Typography } from '@mui/material';
import { BlogAvatar, BlogImage1, BlogImage2, BlogImage3, BlogImage4, BlogImage5 } from 'assets';
import { BlogCard } from 'components';
import { TITLE_WITH_BORDER_BOTTOM } from 'styles/constants';

export const Home = () => (
  <Box>
    <Typography variant="h1" sx={TITLE_WITH_BORDER_BOTTOM}>
      Recent Posts
    </Typography>
    <Box marginTop="60px">
      <BlogCard
        title="I Created a Developer Rap Video - Here's What I Learned from it. Check it out"
        text="Did you come here for something in particular or just general Riker-bashing?
And blowing into maximum warp"
        tag="Travel"
        author="Jesica koli"
        date="02 December 2022"
        duration="3 min. to read"
        authorAvatar={BlogAvatar}
        thumbnail={BlogImage1}
      />

      <BlogCard
        styles={{ marginTop: '64px' }}
        title="Design is the Mix of emotions"
        text="Did you come here for something in particular or just general Riker-bashing?
And blowing into maximum warp"
        tag="Fashion"
        author="Jesica koli"
        date="02 December 2022"
        duration="3 min. to read"
        authorAvatar={BlogAvatar}
        thumbnail={BlogImage2}
      />

      <BlogCard
        styles={{ marginTop: '64px' }}
        title="I Created a Developer Rap Video - Here's What I Learned from it. Check it out"
        text="Did you come here for something in particular or just general Riker-bashing?
And blowing into maximum warp"
        tag="Tech"
        author="Jesica koli"
        date="02 December 2022"
        duration="3 min. to read"
        authorAvatar={BlogAvatar}
        thumbnail={BlogImage3}
      />

      <BlogCard
        styles={{ marginTop: '64px' }}
        title="I Created a Developer Rap Video - Here's What I Learned from it. Check it out"
        text="Did you come here for something in particular or just general Riker-bashing?
And blowing into maximum warp"
        tag="Travel"
        author="Jesica koli"
        date="02 December 2022"
        duration="3 min. to read"
        authorAvatar={BlogAvatar}
        thumbnail={BlogImage4}
      />

      <BlogCard
        styles={{ marginTop: '64px' }}
        title="I Created a Developer Rap Video - Here's What I Learned from it. Check it out"
        text="Did you come here for something in particular or just general Riker-bashing?
And blowing into maximum warp"
        tag="Travel"
        author="Jesica koli"
        date="02 December 2022"
        duration="3 min. to read"
        authorAvatar={BlogAvatar}
        thumbnail={BlogImage5}
      />
    </Box>
  </Box>
);
