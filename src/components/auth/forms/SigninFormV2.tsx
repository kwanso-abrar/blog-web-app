import { Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  Divider,
  Checkbox,
  FormGroup,
  TextField,
  IconButton,
  Typography,
  InputAdornment,
  FormControlLabel
} from '@mui/material';

const Wrapper = styled(Box)(() => ({
  marginTop: '74px'
}));

const InputField = styled(TextField)(() => ({
  width: '100%'
}));

const VisibilityIconText = styled(Typography)(() => ({
  fontWeight: '400',
  fontSize: '15px',
  lineHeight: '150%',
  marginBottom: '5px',
  marginLeft: '10px',
  color: '#666666'
}));

const ForgetPassword = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  display: 'block',
  textAlign: 'right',
  marginTop: '5px'
}));

export const SigninFormV2 = () => {
  const [showPassword, setShowPassword] = useState(true);
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Wrapper>
      <Box>
        <form>
          <Box sx={{ width: '712px' }}>
            <InputField
              variant="outlined"
              label="Email address or user name"
              InputLabelProps={{ shrink: true, sx: { top: '-20px', fontSize: '18px', lineHeight: '150%' } }}
            />
          </Box>

          <Box sx={{ marginTop: '50px', width: '712px' }}>
            <InputField
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              label="Password"
              InputLabelProps={{ shrink: true, sx: { top: '-20px', fontSize: '18px', lineHeight: '150%' } }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" sx={{ position: 'absolute', right: '0', top: '-20px' }}>
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
            <ForgetPassword to="#">Forget your password</ForgetPassword>
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
        <Button
          variant="outlined"
          sx={{
            width: '100%',
            marginTop: '20px',
            height: '64px',
            borderRadius: '40px',
            fontSize: '21px',
            fontWeight: '600',
            lineHeight: '140%'
          }}
          onClick={() => navigate('/signup')}
        >
          Sign up
        </Button>
      </Box>
    </Wrapper>
  );
};
