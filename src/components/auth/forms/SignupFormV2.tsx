import { useState } from 'react';
import { InputField, VisibilityIconText } from 'styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, IconButton, InputAdornment } from '@mui/material';

export const SignupFormV2 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Box sx={{ marginTop: '74px' }}>
      <Box>
        <form>
          <Box sx={{ width: '712px' }}>
            <InputField
              placeholder="Enter your full name"
              variant="outlined"
              label="What’s your full name?"
              InputLabelProps={{ shrink: true }}
            />
          </Box>
          <Box sx={{ marginTop: '50px', width: '712px' }}>
            <InputField
              placeholder="Enter your email address"
              variant="outlined"
              label="What’s your email?"
              InputLabelProps={{ shrink: true }}
            />
          </Box>
          <Box sx={{ marginTop: '50px', width: '712px' }}>
            <InputField
              placeholder="Enter your password"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              label="Create a password"
              InputLabelProps={{ shrink: true }}
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
    </Box>
  );
};
