import { CommentCard } from 'components';
import { useContextApi } from 'AppContext';
import { UserDummyImage } from 'assets';
import { CommentCardContainer } from 'styles';
import { Box, Stack, Typography } from '@mui/material';
import { BlogCommentSectionProps } from 'types';
import { SIGN_IN_TO_COMMENT, TITLE_WITH_BORDER_BOTTOM } from 'styles/constants';

export const BlogCommentSection = ({ comments }: BlogCommentSectionProps) => {
  const { isLoggedIn } = useContextApi();
  return (
    <Box>
      {comments.length > 0 ? (
        <>
          <Stack direction="row" sx={TITLE_WITH_BORDER_BOTTOM}>
            <Typography variant="h1" sx={{ textTransform: 'none' }}>
              {comments.length > 1 ? `${comments.length} comments` : '1 comment'}
            </Typography>
            {!isLoggedIn && <Typography sx={SIGN_IN_TO_COMMENT}>Sign in to comment</Typography>}
          </Stack>

          <Box sx={{ marginTop: '30px' }}>
            {comments.map((comment) => (
              <CommentCardContainer key={comment.id}>
                <CommentCard
                  id={comment.id}
                  userName={comment.user.name}
                  avatar={UserDummyImage}
                  text={comment.text}
                  totallReplies={comment.replyCount || 0}
                />
              </CommentCardContainer>
            ))}
          </Box>
        </>
      ) : (
        <Typography variant="h1" sx={{ ...TITLE_WITH_BORDER_BOTTOM, textTransform: 'none' }}>
          No comments
        </Typography>
      )}
    </Box>
  );
};
