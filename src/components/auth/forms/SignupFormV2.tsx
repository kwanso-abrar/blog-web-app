import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material';

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

export const SignupFormV2 = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Wrapper>
      <Box>
        <form>
          <Box sx={{ width: '712px' }}>
            <InputField
              placeholder="Enter your full name"
              variant="outlined"
              label="What’s your full name?"
              InputLabelProps={{ shrink: true, sx: { top: '-20px', fontSize: '18px', lineHeight: '150%' } }}
            />
          </Box>
          <Box sx={{ marginTop: '50px', width: '712px' }}>
            <InputField
              placeholder="Enter your email address"
              variant="outlined"
              label="What’s your email?"
              InputLabelProps={{ shrink: true, sx: { top: '-20px', fontSize: '18px', lineHeight: '150%' } }}
            />
          </Box>
          <Box sx={{ marginTop: '50px', width: '712px' }}>
            <InputField
              placeholder="Enter your password"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              label="Create a password"
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
              helperText={'Use 8 or more characters with a mix of letters, numbers & symbols'}
            />
          </Box>

          <Box sx={{ marginTop: '40px' }}>
            <Button variant="auth" disabled>
              Create an account
            </Button>
          </Box>
        </form>
      </Box>
    </Wrapper>
  );
};
