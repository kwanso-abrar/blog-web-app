import toast from 'react-hot-toast';
import { useState } from 'react';
import { UserDummyImage } from 'assets';
import { CommentCardProps } from 'types';
import { useRepliesLazyQuery } from 'generated';
import { AddComment, PrimaryLoader } from 'components';
import { ReplyCommentCardContainer } from 'styles';
import { Box, Button, Stack, Typography } from '@mui/material';
import {
  COMMENT_CARD_TEXT,
  COMMENT_CARD_TIME,
  SHOW_REPLIES_BUTTON,
  COMMENT_CARD_USER_NAME
} from 'styles/constants';
import { useContextApi } from 'AppContext';

export const CommentCard = ({
  id,
  text,
  avatar,
  postId,
  userName,
  totallReplies
}: CommentCardProps) => {
  const [showReplies, setShowReplies] = useState(false);
  const { isLoggedIn } = useContextApi();

  const [fetchReplies, { data, loading }] = useRepliesLazyQuery({
    onError: (error) => toast.error(error.message),
    fetchPolicy: 'no-cache'
  });

  const onRetchRepliesData = () => {
    fetchReplies({ variables: { commentId: id } });
  };

  return (
    <Stack direction="row">
      <PrimaryLoader isLoading={loading} />
      <Box sx={{ width: '32px', height: '32px' }}>
        <img src={avatar} width="100%" style={{ borderRadius: '50%' }} />
      </Box>
      <Box sx={{ marginLeft: '16px' }}>
        <Stack direction="row">
          <Typography sx={COMMENT_CARD_USER_NAME}>{userName}</Typography>
          <Typography sx={COMMENT_CARD_TIME}>3 mins ago</Typography>
        </Stack>
        <Typography sx={COMMENT_CARD_TEXT}>{text}</Typography>
        {!showReplies && totallReplies > 0 ? (
          <Button
            type="button"
            variant="text"
            sx={SHOW_REPLIES_BUTTON}
            onClick={() => {
              setShowReplies(!showReplies);
              fetchReplies({ variables: { commentId: id } });
            }}
          >
            Show replies ({totallReplies})
          </Button>
        ) : (
          <>
            <ReplyCommentCardContainer sx={{ marginTop: totallReplies > 0 ? '16px' : '0px' }}>
              {data?.replies.map((reply) => (
                <Box key={reply.id} sx={{ marginTop: '16px' }}>
                  <CommentCard
                    postId={postId}
                    id={reply.id}
                    text={reply.text}
                    avatar={UserDummyImage}
                    userName={reply.user.name}
                    totallReplies={reply.replyCount || 0}
                  />
                </Box>
              ))}
            </ReplyCommentCardContainer>
          </>
        )}
        {isLoggedIn && (
          <Box sx={{ marginTop: '40px', width: '600px' }}>
            <AddComment
              postId={postId}
              parentId={id}
              onRefetch={() => onRetchRepliesData()}
              isReply
            />
          </Box>
        )}
      </Box>
    </Stack>
  );
};
