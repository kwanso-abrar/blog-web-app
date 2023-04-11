import { StyledBadge } from 'styles';
import { UserDummyImage } from 'assets';
import { OnlineUserCardProps } from 'types';
import { COMMENT_CARD_USER_NAME } from 'styles/constants';
import { Stack, Typography, Avatar } from '@mui/material';

export const OnlineUserCard = ({ userName }: OnlineUserCardProps) => (
  <Stack
    direction="row"
    sx={{
      ':hover': { cursor: 'pointer' },
      width: '100%',
      maxWidth: '220px'
    }}
  >
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant="dot"
    >
      <Avatar alt={userName} src={UserDummyImage} />
    </StyledBadge>

    <Stack sx={{ marginLeft: '10px' }}>
      <Typography sx={COMMENT_CARD_USER_NAME}>{userName}</Typography>
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
