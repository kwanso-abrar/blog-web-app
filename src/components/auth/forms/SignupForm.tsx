import toast from 'react-hot-toast';
import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { saveToken } from 'utils';
import { yupSchema } from 'formValidations';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { PrimaryButton } from 'styles';
import { useContextApi } from 'AppContext';
import { PrimaryPasswordField } from 'components/common/inputFields/PrimaryPasswordField';
import { PrimaryInputField, PrimaryLoader } from 'components/common';
import { useSignInMutation, useSignUpMutation } from 'generated';

const schema = yupSchema.signUp;

export const SignupForm = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContextApi();
  const {
    control,
    handleSubmit,
    formState: { dirtyFields }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      ...schema.getDefault()
    }
  });

  const [signUp, { loading: signupLoading }] = useSignUpMutation({
    onCompleted: () => {
      toast.success('Successfully Signed up');
    },
    onError: () => {
      toast.error('User already registerd');
    }
  });

  const [signIn, { loading: signInLoading }] = useSignInMutation({
    onCompleted: (data) => {
      if (data.signIn.accesstoken) {
        saveToken(data.signIn.accesstoken);
        setIsLoggedIn(true);
        navigate('/');
      }
    },
    onError: () => {
      toast.error('Invalid Credentials!');
    }
  });

  const onFormSubmit = (values: any) => {
    signUp({
      variables: {
        name: values.name,
        email: values.email,
        password: values.password
      }
    }).then((response) => {
      if (!response.errors) {
        signIn({
          variables: {
            email: values.email,
            password: values.password
          }
        });
      }
    });
  };

  return (
    <Box sx={{ marginTop: '74px' }}>
      <PrimaryLoader isLoading={signupLoading || signInLoading} />
      <Box>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Box sx={{ width: '712px' }}>
            <PrimaryInputField
              name="name"
              label="What’s your full name?"
              control={control}
              placeholder="Enter your full name"
            />
          </Box>
          <Box sx={{ marginTop: '50px', width: '712px' }}>
            <PrimaryInputField
              name="email"
              label="What’s your email?"
              control={control}
              placeholder="Enter your email address"
            />
          </Box>
          <Box sx={{ marginTop: '50px', width: '712px' }}>
            <PrimaryPasswordField
              name="password"
              label="Create a password"
              control={control}
              placeholder="Enter your password"
              helperText="Use 8 or more characters with a mix of letters, numbers & symbols"
            />
          </Box>

          <Box sx={{ marginTop: '40px' }}>
            <PrimaryButton
              fullWidth
              disabled={!(dirtyFields.name && dirtyFields.email && dirtyFields.password)}
              type="submit"
              variant="contained"
            >
              Create an account
            </PrimaryButton>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
