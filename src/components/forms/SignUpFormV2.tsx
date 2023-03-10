import { styled } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { saveToken } from 'utils/SessionManagement';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContextApi } from 'AppContext';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInMutation, useSignUpMutation } from 'generated';
import { Backdrop, Box, Button, CircularProgress, Grid, TextField } from '@mui/material';
import toast from 'react-hot-toast';
import yupSchema from 'utils/yupSchema';

const Wrapper = styled(Box)(() => ({}));

const schema = yupSchema.signUp;

const SignUpFormV2 = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContextApi();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

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
      if (response) {
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
          <TextField
            fullWidth
            id="name"
            label="name"
            {...register('name')}
            error={errors?.name ? true : false}
            helperText={errors?.name ? errors.name.message?.toString() : ''}
            sx={{ marginTop: '10px' }}
          />
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
            {...register('password')}
            error={errors?.password ? true : false}
            helperText={errors?.password ? errors.password.message?.toString() : ''}
            sx={{ marginTop: '10px' }}
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

export default SignUpFormV2;
