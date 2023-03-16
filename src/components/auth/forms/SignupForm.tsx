import toast from 'react-hot-toast';
import { useState } from 'react';
import { saveToken } from 'utils';
import { yupSchema } from 'formValidations';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContextApi } from 'AppContext';
import { Controller, useForm } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useSignInMutation, useSignUpMutation } from 'generated';
import { AuthButtonLarge, InputField, VisibilityIconText } from 'styles';
import { Backdrop, Box, CircularProgress, IconButton, InputAdornment } from '@mui/material';

const schema = yupSchema.signUp;

const VISIBILTY_ICON_SX = {
  width: '24px',
  height: '24px'
};

export const SignupForm = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContextApi();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { dirtyFields }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      password: ''
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
      {(signupLoading || signInLoading) && (
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={signupLoading || signInLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <Box>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Box sx={{ width: '712px' }}>
            <Controller
              control={control}
              name="name"
              render={({ field, fieldState: { error } }) => (
                <InputField
                  {...field}
                  error={!!error}
                  helperText={error?.message}
                  label="What’s your full name?"
                  variant="outlined"
                  placeholder="Enter your full name"
                  InputLabelProps={{ shrink: true }}
                />
              )}
            />
          </Box>
          <Box sx={{ marginTop: '50px', width: '712px' }}>
            <Controller
              control={control}
              name="email"
              render={({ field, fieldState: { error } }) => (
                <InputField
                  {...field}
                  error={!!error}
                  helperText={error?.message}
                  placeholder="Enter your email address"
                  variant="outlined"
                  label="What’s your email?"
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
                  helperText={error ? error?.message : 'Use 8 or more characters with a mix of letters, numbers & symbols'}
                  placeholder="Enter your password"
                  variant="outlined"
                  type={showPassword ? 'text' : 'password'}
                  label="Create a password"
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" sx={{ position: 'absolute', right: '0', top: '-20px' }}>
                        <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}>
                          {showPassword ? (
                            <>
                              <VisibilityOff sx={{ ...VISIBILTY_ICON_SX }} />
                              <VisibilityIconText>Hide</VisibilityIconText>
                            </>
                          ) : (
                            <>
                              <Visibility sx={{ ...VISIBILTY_ICON_SX }} />
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
          </Box>

          <Box sx={{ marginTop: '40px' }}>
            <AuthButtonLarge
              fullWidth
              disabled={!(dirtyFields.name && dirtyFields.email && dirtyFields.password)}
              type="submit"
              variant="contained"
            >
              Create an account
            </AuthButtonLarge>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
