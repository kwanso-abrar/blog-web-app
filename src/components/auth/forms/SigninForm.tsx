import toast from 'react-hot-toast';
import { useState } from 'react';
import { saveToken } from 'utils';
import { yupSchema } from 'formValidations';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContextApi } from 'AppContext';
import { useSignInMutation } from 'generated';
import { Controller, useForm } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ForgetPasswordLink, GoToSignUpPage, InputField, VisibilityIconText } from 'styles';
import {
  Box,
  Button,
  Divider,
  Backdrop,
  Checkbox,
  FormGroup,
  IconButton,
  Typography,
  InputAdornment,
  CircularProgress,
  FormControlLabel
} from '@mui/material';

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
      email: '',
      password: '',
      rememberMe: true
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
                  variant="outlined"
                  label="Email address or user name"
                  {...field}
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
                      <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}>
                          {showPassword ? (
                            <>
                              <VisibilityOff sx={{ width: '24px', height: '24px' }} />
                              <VisibilityIconText>Hide</VisibilityIconText>
                            </>
                          ) : (
                            <>
                              <Visibility sx={{ width: '24px', height: '24px' }} />
                              <VisibilityIconText> Show</VisibilityIconText>
                            </>
                          )}
                        </IconButton>
                      </InputAdornment>
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
            <Button variant="auth" disabled={!(dirtyFields.email && dirtyFields.password)} type="submit">
              Log in
            </Button>
          </Box>
        </form>
      </Box>
      <Divider sx={{ marginTop: '40px', borderBottom: '2px solid #E5E5E5' }} />
      <Box sx={{ marginTop: '40px' }}>
        <Typography sx={{ color: '#333333', fontSize: '27px', lineHeight: '140%', textAlign: 'center' }}>
          Don’t have an account?
        </Typography>
        <GoToSignUpPage variant="outlined" onClick={() => navigate('/signup')}>
          Sign up
        </GoToSignUpPage>
      </Box>
    </Box>
  );
};
