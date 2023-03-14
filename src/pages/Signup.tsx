import { Box } from '@mui/material';
import { SignupFormV2 } from 'components/auth/forms/SignupFormV2';
import { AuthPageFormContainer, AuthPageHeading, AuthPageSubHeading } from 'styles';

export const Signup = () => {
  return (
    <Box>
      <AuthPageHeading>Create an account</AuthPageHeading>
      <AuthPageSubHeading to="/signin">Already have an account? Log in</AuthPageSubHeading>
      <AuthPageFormContainer>
        <SignupFormV2 />
      </AuthPageFormContainer>
    </Box>
  );
};
