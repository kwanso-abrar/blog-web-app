import { styled } from '@mui/material/styles';
import { useFormik } from 'formik';
import { Box, Button, Grid, Link, TextField } from '@mui/material';
import yupSchema from 'utils/yupSchema';

const Wrapper = styled(Box)(() => ({}));

const SigninForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yupSchema.signIn,
    onSubmit: (values) => {
      console.log('Signin form submitted: ', values);
    },
  });

  return (
    <Wrapper>
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
