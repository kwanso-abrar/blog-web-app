import { CommentCard } from 'components';
import { UserDummyImage } from 'assets';
import { Box, Typography } from '@mui/material';
import { CommentCardContainer } from 'styles';
import { BlogCommentSectionProps } from 'types';
import { TITLE_WITH_BORDER_BOTTOM } from 'styles/constants';

export const BlogCommentSection = ({ comments }: BlogCommentSectionProps) => {
  return (
    <Box>
      <Typography variant="h1" sx={{ ...TITLE_WITH_BORDER_BOTTOM, textTransform: 'none' }}>
        {`${comments.length} comments`}
      </Typography>
      <Box sx={{ marginTop: '30px' }}>
        {comments.map((comment) => (
          <CommentCardContainer key={comment.id}>
            <CommentCard
              userName={comment.user.name}
              avatar={UserDummyImage}
              text={comment.text}
              totallReplies={comment.replyCount || 0}
            />
          </CommentCardContainer>
        ))}
      </Box>
    </Box>
  );
};
