import { styled } from '@mui/material/styles';
import { SignInFormV2 } from 'components/forms';
import { Box, Typography } from '@mui/material';

const Wrapper = styled(Box)(({ theme }) => ({
  paddingTop: '88px',
  minHeight: '100vh',
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

const Signin = () => {
  return (
    <Wrapper>
      <Heading>Sign in</Heading>
      <Container>
        <SignInFormV2 />
      </Container>
    </Wrapper>
  );
};

export default Signin;
