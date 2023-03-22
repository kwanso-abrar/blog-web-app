import { useContextApi } from 'AppContext';
import { UserDummyImage } from 'assets';
import { CommentCardContainer } from 'styles';
import { Box, Stack, Typography } from '@mui/material';
import { AddComment, CommentCard } from 'components';
import { BlogCommentSectionProps } from 'types';
import { SIGN_IN_TO_COMMENT, TITLE_WITH_BORDER_BOTTOM } from 'styles/constants';

export const BlogCommentSection = ({ postId, comments, onRetech }: BlogCommentSectionProps) => {
  const { isLoggedIn } = useContextApi();
  return (
    <Box sx={{ minWidth: '100%' }}>
      <Stack direction="row" sx={TITLE_WITH_BORDER_BOTTOM}>
        <Typography variant="h1" sx={{ textTransform: 'none' }}>
          {comments.length > 1 ? `${comments.length} comments` : `${comments.length} comment`}
        </Typography>
        {!isLoggedIn && <Typography sx={SIGN_IN_TO_COMMENT}>Sign in to comment</Typography>}
      </Stack>

      {isLoggedIn && (
        <Box sx={{ marginTop: '60px' }}>
          <AddComment postId={postId} onRefetch={onRetech} />
        </Box>
      )}

      <Box
        sx={{
          marginTop: '30px',
          minWidth: '100%'
        }}
      >
        {comments.map((comment) => (
          <CommentCardContainer key={comment.id}>
            <CommentCard
              postId={postId}
              id={comment.id}
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
