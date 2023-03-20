import { BlogMetaText, BlogTag } from 'styles';
import { PRIMARY_IMAGE_CONTAINER } from 'styles/constants';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { BlogAvatar, BlogImage1, Calender, Clock } from 'assets';

export const BlogCard = () => (
  <Stack direction="row">
    <Box sx={PRIMARY_IMAGE_CONTAINER}>
      <img src={BlogImage1} width="100%" />
    </Box>
    <Box sx={{ marginLeft: '34px' }}>
      <BlogTag>Travel</BlogTag>
      <Typography
        variant="h2"
        sx={{ maxWidth: '615px', marginTop: '12px', textTransform: 'capitalize' }}
      >
        I Created a Developer Rap Video - Here is What I Learned from it. Check it out
      </Typography>
      <Stack sx={{ marginTop: '10px' }} direction="row" alignItems="center">
        <Stack direction="row" alignItems="center">
          <Box sx={{ width: '18px', height: '18px' }}>
            <img src={BlogAvatar} width="100%" />
          </Box>
          <BlogMetaText>Jesica koli</BlogMetaText>
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
          <BlogMetaText>02 december 2022</BlogMetaText>
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
          <BlogMetaText>3 min. to read</BlogMetaText>
        </Stack>
      </Stack>
      <Box sx={{ marginTop: '10px' }}>
        <Typography
          sx={{ maxWidth: '540px', fontSize: '15px', lineHeight: '150%', color: '#555555' }}
        >
          Did you come here for something in particular or just general Riker-bashing? And blowing
          into maximum warp
        </Typography>
      </Box>
    </Box>
  </Stack>
);
