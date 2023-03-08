import { styled } from '@mui/material/styles';
import { useFormik } from 'formik';
import { Box, Button, Grid, Link, TextField } from '@mui/material';
import yupSchema from 'utils/yupSchema';

const Wrapper = styled(Box)(() => ({}));

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: yupSchema.signUp,
    onSubmit: (values) => {
      console.log('Signup form submitted: ', values);
    },
  });

  return (
    <Wrapper>
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
