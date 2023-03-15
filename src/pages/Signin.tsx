import { Box } from '@mui/material';
import { SigninForm } from 'components';
import { AuthPageFormContainer, AuthPageHeading } from 'styles';

export const Signin = () => {
  return (
    <Box>
      <AuthPageHeading>Log in</AuthPageHeading>
      <AuthPageFormContainer>
        <SigninForm />
      </AuthPageFormContainer>
    </Box>
  );
};
