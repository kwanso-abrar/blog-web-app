import { useState } from 'react';
import { BlogAvatar } from 'assets';
import { CommentCardProps } from 'types';
import { ReplyCommentCardContainer } from 'styles';
import { Box, Button, Stack, Typography } from '@mui/material';
import {
  COMMENT_CARD_TEXT,
  COMMENT_CARD_TIME,
  SHOW_REPLIES_BUTTON,
  COMMENT_CARD_USER_NAME
} from 'styles/constants';

export const CommentCard = ({ avatar, text, totallReplies, userName }: CommentCardProps) => {
  const [showReplies, setShowReplies] = useState(false);
  return (
    <Stack direction="row">
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
            onClick={() => setShowReplies(!showReplies)}
          >
            Show replies ({totallReplies})
          </Button>
        ) : (
          <ReplyCommentCardContainer>
            <CommentCard
              userName="Jesica koli"
              avatar={BlogAvatar}
              text="Did you come here for something in particular or just general Riker-bashing? And blowing into maximum"
              totallReplies={5}
            />
          </ReplyCommentCardContainer>
        )}
      </Box>
    </Stack>
  );
};
