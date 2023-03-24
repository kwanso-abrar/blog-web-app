import toast from 'react-hot-toast';
import { useState } from 'react';
import { useContextApi } from 'AppContext';
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

export const CommentCard = ({
  id,
  text,
  avatar,
  postId,
  userName,
  isParent = false,
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
            <ReplyCommentCardContainer
              sx={{
                marginLeft: totallReplies > 0 ? '0px' : '0px',
                paddingLeft: totallReplies > 0 ? '24px' : '0',
                marginTop: totallReplies > 0 ? '16px' : '0px',
                borderLeft: totallReplies > 0 ? '1px solid rgba(102, 102, 102, 0.3)' : 'none'
              }}
            >
              {data?.replies.map((reply) => (
                <Box key={reply.id} sx={{ marginTop: '16px' }}>
                  <CommentCard
                    id={id}
                    text={reply.text}
                    avatar={UserDummyImage}
                    postId={postId}
                    isParent={false}
                    userName={reply.user.name}
                    totallReplies={reply.replyCount || 0}
                  />
                </Box>
              ))}
              {isLoggedIn && isParent && (
                <Box sx={{ marginTop: '40px', width: '600px' }}>
                  <AddComment
                    postId={postId}
                    parentId={id}
                    onRefetch={() => onRetchRepliesData()}
                    isReply
                  />
                </Box>
              )}
            </ReplyCommentCardContainer>
          </>
        )}
      </Box>
    </Stack>
  );
};
