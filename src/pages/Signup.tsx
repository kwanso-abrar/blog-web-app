import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { SignupFormV2 } from 'components/auth/forms/SignupFormV2';
import { Box, Typography } from '@mui/material';

const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '27px',
  textAlign: 'center',
  fontWeight: 600,
  lineHeight: '140%',
  textTransform: 'capitalize',
}));

const SubHeading = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  display: 'flex',
  fontSize: '15px',
  textAlign: 'center',
  fontWeight: 400,
  lineHeight: '150%',
  justifyContent: 'center',
  textDecoration: 'none',
}));

const Container = styled(Box)(() => ({
  display: 'flex',
  marginTop: '25px',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const Signup = () => {
  return (
    <Box>
      <Heading>Create an account</Heading>
      <SubHeading to="/signin">Already have an account? Log in</SubHeading>
      <Container>
        {/* <SignUpForm /> */}
        <SignupFormV2 />
      </Container>
    </Box>
  );
};
