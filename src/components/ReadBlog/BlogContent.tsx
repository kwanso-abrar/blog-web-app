import { BlogTagChip } from 'styles';
import { BlogMetaData } from 'components';
import { Box, Stack, Typography } from '@mui/material';
import { BlogAvatar, BlogThumbnail1 } from 'assets';
import { BLOG_TEXT, READ_BLOG_TIME_TO_READ_TAG_CHIP } from 'styles/constants';

export const BlogContent = () => (
  <>
    <Stack direction="row">
      <BlogTagChip sx={{ background: '#F2F8F7', color: '#666666' }}>Travel</BlogTagChip>
      <BlogTagChip sx={READ_BLOG_TIME_TO_READ_TAG_CHIP}>3 mins. to read</BlogTagChip>
    </Stack>
    <Typography variant="h1" sx={{ marginTop: '20px' }}>
      I Created a Developer Rap Video - Here is What I Learned
    </Typography>
    <Box marginTop="19px">
      <BlogMetaData author="Jesica koli" authorAvatar={BlogAvatar} date="02 december 2022" />
    </Box>
    <Box sx={{ width: '856px', height: '432px', marginTop: '35px' }}>
      <img src={BlogThumbnail1} width="100%" style={{ objectFit: 'cover', borderRadius: '5px' }} />
    </Box>
    <Typography sx={BLOG_TEXT}>
      Did you come here for something in particular or just general Riker-bashing? And blowing into
      maximum warp speed, you appeared for an instant to be in two places at once. We have a
      saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about the
      assassination attempt on Lieutenant Worf. Could someone survive inside a transporter buffer
      for 75 years? Fate. It protects fools, little children, and ships. Did you come here for
      something in particular or just general Riker-bashing? And blowing into maximum warp speed,
      you appeared for an instant to be in two places at once. We have a saboteur aboard. We know
      you’re dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant
      Worf. Could someone survive inside a transporter buffer for 75 years? Fate. It protects fools,
      little children, and ships.
    </Typography>
  </>
);
