import { styled } from '@mui/material/styles';
import { saveToken } from 'utils/SessionManagement';
import { yupSchema } from 'utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContextApi } from 'AppContext';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInMutation } from 'generated';
import { Controller, useForm } from 'react-hook-form';
import { Backdrop, Box, Button, CircularProgress, Grid, TextField } from '@mui/material';
import toast from 'react-hot-toast';

const Wrapper = styled(Box)(() => ({}));

const schema = yupSchema.signIn;

export const SignInForm = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContextApi();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ resolver: yupResolver(schema) });

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
    },
  });
  const onFormSubmit = (values: any) => {
    console.log(values);
    signIn({
      variables: {
        email: values.email,
        password: values.password,
      },
    });
  };

  return (
    <Wrapper>
      {signInLoading && (
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={signInLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <Box>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField
                  ref={ref}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  fullWidth
                  id="email"
                  label="Email"
                  error={errors?.email ? true : false}
                  helperText={errors?.email ? errors.email.message?.toString() : ''}
                  sx={{ marginTop: '10px' }}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField
                  ref={ref}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  fullWidth
                  id="password"
                  label="Password"
                  type="password"
                  error={errors?.password ? true : false}
                  helperText={errors?.password ? errors.password.message?.toString() : ''}
                  sx={{ marginTop: '10px' }}
                />
              )}
            />

            <Button color="primary" variant="contained" fullWidth type="submit" sx={{ marginTop: '10px' }}>
              Submit
            </Button>
          </>
        </form>
        <Grid container sx={{ marginTop: '5px' }}>
          <Grid item xs>
            <Link to="#">Forgot password?</Link>
          </Grid>
          <Grid item>
            <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
  );
};
