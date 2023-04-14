import { StyledBadge } from 'styles';
import { UserDummyImage } from 'assets';
import { useChatContext } from 'contexts';
import { OnlineUserCardProps } from 'types';
import { COMMENT_CARD_USER_NAME } from 'styles/constants';
import { Stack, Typography, Avatar } from '@mui/material';

export const OnlineUserCard = ({ onlineUser }: OnlineUserCardProps) => {
  const { chatRelatedInfo } = useChatContext();

  const getUserChatNotification = () =>
    chatRelatedInfo?.chats.find((chat) => chat.roomName.includes(onlineUser.userId))
      ?.notifications || 0;

  return (
    <Stack
      direction="row"
      sx={{
        ':hover': { cursor: 'pointer' },
        maxWidth: '220px'
      }}
    >
      <StyledBadge
        overlap="circular"
        variant="dot"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Avatar alt={onlineUser.name} src={UserDummyImage} />
      </StyledBadge>

      <Stack sx={{ marginLeft: '10px' }}>
        <Typography sx={COMMENT_CARD_USER_NAME}>
          {onlineUser.name} &nbsp; {getUserChatNotification()}
        </Typography>
        <Typography
          sx={{
            ...COMMENT_CARD_USER_NAME,
            textTransform: 'lowercase',
            color: '#666666'
          }}
        >
          online
        </Typography>
      </Stack>
    </Stack>
  );
};
