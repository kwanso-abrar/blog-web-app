import toast from 'react-hot-toast';
import { useState } from 'react';
import { saveToken } from 'utils';
import { yupSchema } from 'formValidations';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContextApi } from 'AppContext';
import { useSignInMutation } from 'generated';
import { Controller, useForm } from 'react-hook-form';
import { DONT_HAVE_ACCOUNT_SX } from 'styles/constants';
import { PasswordInputAdornment } from '../PasswordInputAdornment';
import { PrimaryButton, ForgetPasswordLink, InputField } from 'styles';
import { Box, Divider, Backdrop, Checkbox, FormGroup, Typography, CircularProgress, FormControlLabel } from '@mui/material';

const schema = yupSchema.signIn;

export const SigninForm = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContextApi();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [showPassword, setShowPassword] = useState(true);
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
      navigate('/');
    }
  };

  return (
    <Box sx={{ marginTop: '74px' }}>
      {signInLoading && (
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={signInLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <Box>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Box sx={{ width: '712px' }}>
            <Controller
              control={control}
              name="email"
              render={({ field, fieldState: { error } }) => (
                <InputField
                  {...field}
                  variant="outlined"
                  label="Email address or user name"
                  error={!!error}
                  helperText={error?.message}
                  InputLabelProps={{ shrink: true }}
                />
              )}
            />
          </Box>

          <Box sx={{ marginTop: '50px', width: '712px' }}>
            <Controller
              control={control}
              name="password"
              render={({ field, fieldState: { error } }) => (
                <InputField
                  {...field}
                  error={!!error}
                  helperText={error?.message}
                  variant="outlined"
                  type={showPassword ? 'text' : 'password'}
                  label="Password"
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    endAdornment: (
                      <PasswordInputAdornment showPassword={showPassword} onhandleClickShowPassword={handleClickShowPassword} />
                    )
                  }}
                />
              )}
            />

            <ForgetPasswordLink to="#">Forget your password</ForgetPasswordLink>
          </Box>

          <Controller
            control={control}
            name="rememberMe"
            render={({ field }) => (
              <FormGroup>
                <FormControlLabel control={<Checkbox {...field} />} checked={field.value} label="Remember me" />
              </FormGroup>
            )}
          />

          <Box sx={{ marginTop: '40px' }}>
            <PrimaryButton variant="contained" fullWidth disabled={!(dirtyFields.email && dirtyFields.password)} type="submit">
              Log in
            </PrimaryButton>
          </Box>
        </form>
      </Box>
      <Divider sx={{ marginTop: '40px', borderBottom: '2px solid #E5E5E5' }} />
      <Box sx={{ marginTop: '40px' }}>
        <Typography sx={DONT_HAVE_ACCOUNT_SX}>Don’t have an account?</Typography>
        <PrimaryButton variant="outlined" fullWidth onClick={() => navigate('/signup')} sx={{ marginTop: '20px' }}>
          Sign up
        </PrimaryButton>
      </Box>
    </Box>
  );
};
