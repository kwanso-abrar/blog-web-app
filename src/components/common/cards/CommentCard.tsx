import toast from 'react-hot-toast';
import { useState } from 'react';
import { PrimaryLoader } from 'components';
import { UserDummyImage } from 'assets';
import { CommentCardProps } from 'types';
import { useRepliesLazyQuery } from 'generated';
import { ReplyCommentCardContainer } from 'styles';
import { Box, Button, Stack, Typography } from '@mui/material';
import {
  COMMENT_CARD_TEXT,
  COMMENT_CARD_TIME,
  SHOW_REPLIES_BUTTON,
  COMMENT_CARD_USER_NAME
} from 'styles/constants';

export const CommentCard = ({ id, avatar, text, totallReplies, userName }: CommentCardProps) => {
  const [showReplies, setShowReplies] = useState(false);

  const [fetchReplies, { data, loading }] = useRepliesLazyQuery({
    onError: (error) => toast.error(error.message)
  });

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
          <ReplyCommentCardContainer sx={{ marginTop: totallReplies > 0 ? '16px' : '0px' }}>
            {data?.replies.map((reply) => (
              <Box key={reply.id} sx={{ marginTop: '16px' }}>
                <CommentCard
                  id={reply.id}
                  text={reply.text}
                  avatar={UserDummyImage}
                  userName={reply.user.name}
                  totallReplies={reply.replyCount || 0}
                />
              </Box>
            ))}
          </ReplyCommentCardContainer>
        )}
      </Box>
    </Stack>
  );
};
