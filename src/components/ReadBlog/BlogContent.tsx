import { BlogTagChip } from 'styles';
import { BlogMetaData } from 'components';
import { BlogContentProps } from 'types';
import { Box, Stack, Typography } from '@mui/material';
import { BlogThumbnail1, UserDummyImage } from 'assets';
import { BLOG_TEXT, READ_BLOG_TIME_TO_READ_TAG_CHIP } from 'styles/constants';

export const BlogContent = ({ text, title, authorName }: BlogContentProps) => (
  <>
    <Stack direction="row">
      <BlogTagChip sx={{ background: '#F2F8F7', color: '#666666' }}>Travel</BlogTagChip>
      <BlogTagChip sx={READ_BLOG_TIME_TO_READ_TAG_CHIP}>3 mins. to read</BlogTagChip>
    </Stack>
    <Typography variant="h1" sx={{ marginTop: '20px' }}>
      {title}
    </Typography>
    <Box marginTop="19px">
      <BlogMetaData author={authorName} authorAvatar={UserDummyImage} date="02 december 2022" />
    </Box>
    <Box sx={{ width: '856px', height: '432px', marginTop: '35px' }}>
      <img src={BlogThumbnail1} width="100%" style={{ objectFit: 'cover', borderRadius: '5px' }} />
    </Box>
    <Typography sx={BLOG_TEXT}>{text}</Typography>
  </>
);
