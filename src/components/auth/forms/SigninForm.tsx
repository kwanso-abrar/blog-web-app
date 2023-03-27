import toast from 'react-hot-toast';
import { saveToken } from 'utils';
import { yupSchema } from 'formValidations';
import { ROUTES_PATH } from '../../../constants';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContextApi } from 'AppContext';
import { useSignInMutation } from 'generated';
import { Controller, useForm } from 'react-hook-form';
import { DONT_HAVE_ACCOUNT_SX } from 'styles/constants';
import { PrimaryButton, ForgetPasswordLink } from 'styles';
import { PrimaryInputField, PrimaryLoader, PrimaryPasswordField } from 'components';
import { Box, Divider, Checkbox, FormGroup, Typography, FormControlLabel } from '@mui/material';

const schema = yupSchema.signIn;

export const SigninForm = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContextApi();

  const {
    handleSubmit,
    control,
    formState: { dirtyFields }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      rememberMe: true,
      ...schema.getDefault()
    }
  });

  const [signIn, { loading: signInLoading }] = useSignInMutation({
    onError: () => {
      toast.error('Invalid Credentials!');
    }
  });

  const onFormSubmit = async (values: any) => {
    const response = await signIn({
      variables: {
        email: values.email,
        password: values.password
      }
    });
    if (response.data?.signIn) {
      if (values.rememberMe) {
        saveToken(response.data.signIn.accesstoken);
      }
      setIsLoggedIn(true);
      navigate(ROUTES_PATH.home.path);
    }
  };

  return (
    <Box sx={{ marginTop: '74px' }}>
      <PrimaryLoader isLoading={signInLoading} />
      <Box>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Box sx={{ width: '712px' }}>
            <PrimaryInputField name="email" control={control} label="Email address or user name" />
          </Box>

          <Box sx={{ marginTop: '50px', width: '712px' }}>
            <PrimaryPasswordField control={control} label="Password" name="password" />
            <ForgetPasswordLink to="#">Forget your password</ForgetPasswordLink>
          </Box>

          <Controller
            control={control}
            name="rememberMe"
            render={({ field }) => (
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox {...field} />}
                  checked={field.value}
                  label="Remember me"
                />
              </FormGroup>
            )}
          />

          <Box sx={{ marginTop: '40px' }}>
            <PrimaryButton
              variant="contained"
              fullWidth
              disabled={!(dirtyFields.email && dirtyFields.password)}
              type="submit"
            >
              Log in
            </PrimaryButton>
          </Box>
        </form>
      </Box>

      <Divider sx={{ marginTop: '40px', borderBottom: '2px solid #E5E5E5' }} />

      <Box sx={{ marginTop: '40px' }}>
        <Typography sx={DONT_HAVE_ACCOUNT_SX}>Don’t have an account?</Typography>
        <PrimaryButton
          variant="outlined"
          fullWidth
          onClick={() => navigate(ROUTES_PATH.signup.path)}
          sx={{ marginTop: '20px' }}
        >
          Sign up
        </PrimaryButton>
      </Box>
    </Box>
  );
};
