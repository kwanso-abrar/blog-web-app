import { BlogCardProps } from 'types';
import { Calender, Clock } from 'assets';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { BlogCardMetaDataIconContainer, BlogCardMetaText, BlogCardTag } from 'styles';
import {
  PRIMARY_BLOG_CARD_TEXT,
  PRIMARY_BLOG_CARD_TITLE,
  PRIMARY_BLOG_CARD_IMAGE_CONTAINER,
  PRIMARY_BLOG_CARD_META_DATA_DIVIDER
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
        <img src={thumbnail} width="100%" />
      </Box>
      <Box sx={{ marginLeft: '34px' }}>
        <BlogCardTag>{tag}</BlogCardTag>
        <Typography variant="h2" sx={PRIMARY_BLOG_CARD_TITLE}>
          {title}
        </Typography>
        <Stack sx={{ marginTop: '10px' }} direction="row" alignItems="center">
          <Stack direction="row" alignItems="center">
            <Box sx={{ width: '18px', height: '18px' }}>
              <img src={authorAvatar} width="100%" style={{ borderRadius: '50%' }} />
            </Box>
            <BlogCardMetaText>{author}</BlogCardMetaText>
          </Stack>

          <Divider
            orientation="vertical"
            flexItem
            variant="middle"
            sx={PRIMARY_BLOG_CARD_META_DATA_DIVIDER}
          />

          <Stack direction="row" alignItems="center" sx={{ marginLeft: '10px' }}>
            <BlogCardMetaDataIconContainer>
              <Calender />
            </BlogCardMetaDataIconContainer>
            <BlogCardMetaText>{date}</BlogCardMetaText>
          </Stack>

          <Divider
            orientation="vertical"
            flexItem
            variant="middle"
            sx={PRIMARY_BLOG_CARD_META_DATA_DIVIDER}
          />

          <Stack direction="row" alignItems="center" sx={{ marginLeft: '10px' }}>
            <BlogCardMetaDataIconContainer>
              <Clock />
            </BlogCardMetaDataIconContainer>
            <BlogCardMetaText>{duration}</BlogCardMetaText>
          </Stack>
        </Stack>
        <Box sx={{ marginTop: '10px' }}>
          <Typography sx={PRIMARY_BLOG_CARD_TEXT}>{text}</Typography>
        </Box>
      </Box>
    </Stack>
  </Box>
);
