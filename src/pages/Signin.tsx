import { Box } from '@mui/material';
import { SigninFormV2 } from 'components/auth/forms/SigninFormV2';
import { AuthPageFormContainer, AuthPageHeading } from 'styles';

export const Signin = () => {
  return (
    <Box>
      <AuthPageHeading>Log in</AuthPageHeading>
      <AuthPageFormContainer>
        <SigninFormV2 />
      </AuthPageFormContainer>
    </Box>
  );
};
