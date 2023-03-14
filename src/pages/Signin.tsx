import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { SigninFormV2 } from 'components/auth/forms/SigninFormV2';

const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '27px',
  fontWeight: 600,
  lineHeight: '140%',
  textAlign: 'center'
}));

const Container = styled(Box)(() => ({
  display: 'flex',
  marginTop: '25px',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const Signin = () => {
  return (
    <Box>
      <Heading>Log in</Heading>
      <Container>
        {/* <SignInForm /> */}
        <SigninFormV2 />
      </Container>
    </Box>
  );
};
