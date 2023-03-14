import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ForgetPasswordLink, GoToSignUpPage, InputField, VisibilityIconText } from 'styles';
import {
  Box,
  Button,
  Divider,
  Checkbox,
  FormGroup,
  IconButton,
  Typography,
  InputAdornment,
  FormControlLabel
} from '@mui/material';

export const SigninFormV2 = () => {
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [showPassword, setShowPassword] = useState(true);

  return (
    <Box sx={{ marginTop: '74px' }}>
      <Box>
        <form>
          <Box sx={{ width: '712px' }}>
            <InputField variant="outlined" label="Email address or user name" InputLabelProps={{ shrink: true }} />
          </Box>

          <Box sx={{ marginTop: '50px', width: '712px' }}>
            <InputField
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
            <ForgetPasswordLink to="#">Forget your password</ForgetPasswordLink>
          </Box>

          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
          </FormGroup>

          <Box sx={{ marginTop: '40px' }}>
            <Button variant="auth" disabled>
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
