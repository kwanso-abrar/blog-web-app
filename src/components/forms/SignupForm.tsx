import { styled } from '@mui/material/styles';
import { saveToken } from 'utils/SessionManagement';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { useSignInMutation, useSignUpMutation } from 'generated';
import { Backdrop, Box, Button, CircularProgress, Grid, Link, TextField } from '@mui/material';
import toast from 'react-hot-toast';
import yupSchema from 'utils/yupSchema';

const Wrapper = styled(Box)(() => ({}));

const SignupForm = () => {
  const history = useHistory();

  const [signUp, { loading: signupLoading }] = useSignUpMutation({
    onCompleted: () => {
      toast.success('Successfully Signed up');
    },
    onError: () => {
      toast.error('User already registerd');
    },
  });

  // this is working

  // useEffect(() => {
  //   history.push('/signin');
  // }, []);

  const [signIn, { loading: signInLoading }] = useSignInMutation({
    onCompleted: (data) => {
      if (data.signIn.accesstoken) {
        saveToken(data.signIn.accesstoken);
        console.log('navigating to home page');
        history.push('/');
      }
    },
    onError: () => {
      // show error message
    },
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: yupSchema.signUp,
    onSubmit: (values) => {
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
    },
  });

  return (
    <Wrapper>
      {(signupLoading || signInLoading) && (
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={!signupLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}

      <Box>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            sx={{ marginTop: '10px' }}
          />

          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{ marginTop: '10px' }}
          />

          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            sx={{ marginTop: '10px' }}
          />

          <Button color="primary" variant="contained" fullWidth type="submit" sx={{ marginTop: '10px' }}>
            Submit
          </Button>
        </form>
        <Grid container sx={{ marginTop: '5px' }}>
          <Grid item xs>
            {/* <Link href="#" variant="body2">
              Forgot password?
            </Link> */}
          </Grid>
          <Grid item>
            <Link href="/signin" variant="body2">
              {'Already have an account? Sign In'}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
  );
};

export default SignupForm;
