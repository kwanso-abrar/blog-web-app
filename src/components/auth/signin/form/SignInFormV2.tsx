import { styled } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { saveToken } from 'utils/SessionManagement';
import { yupSchema } from 'utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContextApi } from 'AppContext';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInMutation } from 'generated';
import { Backdrop, Box, Button, CircularProgress, Grid, TextField } from '@mui/material';
import toast from 'react-hot-toast';

const Wrapper = styled(Box)(() => ({}));

const schema = yupSchema.signIn;

const SignInFormV2 = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContextApi();
  const {
    register,
    handleSubmit,
    formState: { errors },
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
            <TextField
              fullWidth
              id="email"
              label="Email"
              {...register('email')}
              error={errors?.email ? true : false}
              helperText={errors?.email ? errors.email.message?.toString() : ''}
              sx={{ marginTop: '10px' }}
            />

            <TextField
              fullWidth
              id="password"
              label="Password"
              type="password"
              error={errors?.password ? true : false}
              helperText={errors?.password ? errors.password.message?.toString() : ''}
              {...register('password')}
              sx={{ marginTop: '10px' }}
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

export default SignInFormV2;
