import { Box } from '@mui/material';
import { useState } from 'react';
import { PasswordInputAdornment } from 'components/common/PasswordInputAdornment';
import { InputField, PrimaryButton } from 'styles';

export const SettingsForm = () => {
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowRepeatPassword = () => setShowRepeatPassword((show) => !show);
  const [showPassword, setShowPassword] = useState(true);
  const [showRepeatPassword, setShowRepeatPassword] = useState(true);
  return (
    <Box>
      <form>
        <Box sx={{ width: '715px' }}>
          <InputField
            helperText="Use 8 or more characters with a mix of letters, numbers & symbols"
            variant="outlined"
            fullWidth
            label="Type new password"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: (
                <PasswordInputAdornment
                  showPassword={showPassword}
                  onhandleClickShowPassword={handleClickShowPassword}
                />
              )
            }}
          />
        </Box>
        <Box sx={{ width: '715px', marginTop: '70px' }}>
          <InputField
            helperText="Use 8 or more characters with a mix of letters, numbers & symbols"
            variant="outlined"
            fullWidth
            label="Type new password again"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: (
                <PasswordInputAdornment
                  showPassword={showRepeatPassword}
                  onhandleClickShowPassword={handleClickShowRepeatPassword}
                />
              )
            }}
          />
        </Box>
        <Box sx={{ width: '356px', marginTop: '57px' }}>
          <PrimaryButton disabled variant="contained" fullWidth>
            Save changes
          </PrimaryButton>
        </Box>
      </form>
    </Box>
  );
};
