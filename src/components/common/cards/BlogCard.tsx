import { BlogTagChip } from 'styles';
import { BlogMetaData } from 'components';
import { BlogCardProps } from 'types';
import { Box, Stack, Typography } from '@mui/material';
import {
  PRIMARY_BLOG_CARD_TEXT,
  PRIMARY_BLOG_CARD_TITLE,
  PRIMARY_BLOG_CARD_IMAGE_CONTAINER
} from 'styles/constants';

export const BlogCard = ({
  tag,
  date,
  text,
  title,
  author,
  styles,
  duration,
  thumbnail,
  authorAvatar
}: BlogCardProps) => (
  <Box sx={{ ...styles, ':hover': { cursor: 'pointer' }, maxWidth: '915px' }}>
    <Stack direction="row">
      <Box sx={PRIMARY_BLOG_CARD_IMAGE_CONTAINER}>
        <img
          src={thumbnail}
          width="100%"
          height="100%"
          style={{ objectFit: 'cover', borderRadius: '5px' }}
        />
      </Box>
      <Box sx={{ marginLeft: '34px' }}>
        <BlogTagChip>{tag}</BlogTagChip>
        <Typography variant="h2" sx={PRIMARY_BLOG_CARD_TITLE}>
          {title}
        </Typography>

        <Box sx={{ marginTop: '10px' }}>
          <BlogMetaData
            author={author}
            authorAvatar={authorAvatar}
            date={date}
            duration={duration}
          />
        </Box>

        <Box sx={{ marginTop: '10px' }}>
          <Typography sx={PRIMARY_BLOG_CARD_TEXT}>{text}</Typography>
        </Box>
      </Box>
    </Stack>
  </Box>
);
