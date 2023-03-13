import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const Wrapper = styled(Box)(() => ({
  overflowY: 'auto',
}));

const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  fontSize: '48px',
  fontWeight: 700,
  textAlign: 'center',
  marginTop: '50px',
}));

export const Home = () => (
  <Wrapper>
    <Heading>WELCOME TO BLOGii &#128512;</Heading>
  </Wrapper>
);
