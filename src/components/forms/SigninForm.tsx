import { styled } from '@mui/material/styles';
import { saveToken } from 'utils/SessionManagement';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { useContextApi } from 'AppContext';
import { useSignInMutation } from 'generated';
import { Backdrop, Box, Button, CircularProgress, Grid, Link, TextField } from '@mui/material';
import toast from 'react-hot-toast';
import yupSchema from 'utils/yupSchema';
import { useEffect } from 'react';

const Wrapper = styled(Box)(() => ({}));

const SigninForm = () => {
  const history = useHistory();
  const { isLoggedIn, setIsLoggedIn } = useContextApi();

  const [signIn, { loading: signInLoading }] = useSignInMutation({
    onCompleted: (data) => {
      if (data.signIn.accesstoken) {
        saveToken(data.signIn.accesstoken);
        setIsLoggedIn(true);
        history.push('/');
      }
    },
    onError: () => {
      toast.error('Invalid Credentials!');
    },
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yupSchema.signIn,
    onSubmit: (values) => {
      signIn({
        variables: {
          email: values.email,
          password: values.password,
        },
      });
    },
  });

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/');
    }
  }, []);

  return (
    <Wrapper>
      {signInLoading && (
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={signInLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <Box>
        <form onSubmit={formik.handleSubmit}>
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
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
  );
};

export default SigninForm;
