import { BlogCardProps } from 'types';
import { Calender, Clock } from 'assets';
import { BlogMetaText, BlogTag } from 'styles';
import { PRIMARY_IMAGE_CONTAINER } from 'styles/constants';
import { Box, Divider, Stack, Typography } from '@mui/material';

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
      <Box sx={PRIMARY_IMAGE_CONTAINER}>
        <img src={thumbnail} width="100%" />
      </Box>
      <Box sx={{ marginLeft: '34px' }}>
        <BlogTag>{tag}</BlogTag>
        <Typography
          variant="h2"
          sx={{ maxWidth: '615px', marginTop: '12px', textTransform: 'capitalize' }}
        >
          {title}
        </Typography>
        <Stack sx={{ marginTop: '10px' }} direction="row" alignItems="center">
          <Stack direction="row" alignItems="center">
            <Box sx={{ width: '18px', height: '18px' }}>
              <img src={authorAvatar} width="100%" />
            </Box>
            <BlogMetaText>{author}</BlogMetaText>
          </Stack>

          <Divider
            orientation="vertical"
            flexItem
            variant="middle"
            sx={{ marginLeft: '10px', height: '12px', backgroundColor: '#999999' }}
          />

          <Stack direction="row" alignItems="center" sx={{ marginLeft: '10px' }}>
            <Box sx={{ width: '10px', height: '12px', marginBottom: '10px' }}>
              <Calender width="100%" height="100%" />
            </Box>
            <BlogMetaText>{date}</BlogMetaText>
          </Stack>

          <Divider
            orientation="vertical"
            flexItem
            variant="middle"
            sx={{ marginLeft: '10px', height: '12px', backgroundColor: '#999999' }}
          />

          <Stack direction="row" alignItems="center" sx={{ marginLeft: '10px' }}>
            <Box sx={{ width: '10px', height: '12px', marginBottom: '10px' }}>
              <Clock width="100%" height="100%" />
            </Box>
            <BlogMetaText>{duration}</BlogMetaText>
          </Stack>
        </Stack>
        <Box sx={{ marginTop: '10px' }}>
          <Typography
            sx={{ maxWidth: '540px', fontSize: '15px', lineHeight: '150%', color: '#555555' }}
          >
            {text}
          </Typography>
        </Box>
      </Box>
    </Stack>
  </Box>
);
