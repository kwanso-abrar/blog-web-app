import { BlogAvatar } from 'assets';
import { CommentCard } from 'components';
import { Box, Typography } from '@mui/material';
import { CommentCardContainer } from 'styles';
import { TITLE_WITH_BORDER_BOTTOM } from 'styles/constants';

export const BlogCommentSection = () => {
  return (
    <Box>
      <Typography variant="h1" sx={{ ...TITLE_WITH_BORDER_BOTTOM, textTransform: 'none' }}>
        24 comments
      </Typography>
      <Box sx={{ marginTop: '30px' }}>
        <CommentCardContainer>
          <CommentCard
            userName="Jesica koli"
            avatar={BlogAvatar}
            text="Did you come here for something in particular or just general Riker-bashing? And blowing into maximum"
            totallReplies={3}
          />
        </CommentCardContainer>
        <CommentCardContainer>
          <CommentCard
            userName="Jesica koli"
            avatar={BlogAvatar}
            text="Did you come here for something in particular or just general Riker-bashing? And blowing into maximum"
            totallReplies={5}
          />
        </CommentCardContainer>
        <CommentCardContainer>
          <CommentCard
            userName="Jesica koli"
            avatar={BlogAvatar}
            text="Did you come here for something in particular or just general Riker-bashing? And blowing into maximum"
            totallReplies={6}
          />
        </CommentCardContainer>
        <CommentCardContainer>
          <CommentCard
            userName="Jesica koli"
            avatar={BlogAvatar}
            text="Did you come here for something in particular or just general Riker-bashing? And blowing into maximum"
            totallReplies={10}
          />
        </CommentCardContainer>
      </Box>
    </Box>
  );
};
