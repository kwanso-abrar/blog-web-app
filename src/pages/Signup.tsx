import { styled } from '@mui/material/styles';
import { SignUpForm } from 'components';
import { Box, Typography } from '@mui/material';

const Wrapper = styled(Box)(({ theme }) => ({
  paddingTop: '88px',
  backgroundColor: theme.palette.secondary.contrastText,

  // [theme.breakpoints.down('md')]: {
  //   backgroundColor: 'red',
  // },
}));

const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  fontSize: '48px',
  fontWeight: 700,
  textAlign: 'center',
}));

const Container = styled(Box)(() => ({
  display: 'flex',
  marginTop: '25px',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const Signup = () => {
  return (
    <Wrapper>
      <Heading>Sign Up</Heading>
      <Container>
        <SignUpForm />
      </Container>
    </Wrapper>
  );
};
