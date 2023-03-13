import { styled } from '@mui/material/styles';
import { saveToken } from 'utils';
import { yupSchema } from 'formValidations';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContextApi } from 'AppContext';
import { Link, useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { useSignInMutation, useSignUpMutation } from 'generated';
import { Backdrop, Box, Button, CircularProgress, Grid, TextField } from '@mui/material';
import toast from 'react-hot-toast';

const Wrapper = styled(Box)(() => ({}));

const schema = yupSchema.signUp;

export const SignUpForm = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContextApi();
  const { control, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const [signUp, { loading: signupLoading }] = useSignUpMutation({
    onCompleted: () => {
      toast.success('Successfully Signed up');
    },
    onError: () => {
      toast.error('User already registerd');
    },
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
    },
  });

  const onFormSubmit = (values: any) => {
    signUp({
      variables: {
        name: values.name,
        email: values.email,
        password: values.password,
      },
    }).then((response) => {
      if (!response.errors) {
        signIn({
          variables: {
            email: values.email,
            password: values.password,
          },
        });
      }
    });
  };

  return (
    <Wrapper>
      {(signupLoading || signInLoading) && (
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={!signupLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <Box>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState: { error } }) => (
              <TextField {...field} error={!!error} helperText={error?.message} fullWidth sx={{ marginTop: '10px' }} />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field, fieldState: { error } }) => (
              <TextField {...field} error={!!error} helperText={error?.message} sx={{ marginTop: '10px' }} fullWidth />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field, fieldState: { error } }) => (
              <TextField {...field} error={!!error} helperText={error?.message} fullWidth sx={{ marginTop: '10px' }} />
            )}
          />

          <Button color="primary" variant="contained" fullWidth type="submit" sx={{ marginTop: '10px' }}>
            Submit
          </Button>
        </form>
        <Grid container sx={{ marginTop: '5px' }}>
          <Grid item xs></Grid>
          <Grid item>
            <Link to="/signin">{'Already have an account? Sign In'}</Link>
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
  );
};
