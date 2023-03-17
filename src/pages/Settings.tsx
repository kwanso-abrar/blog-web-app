import { SettingsForm } from 'components/settings';
import { Box, Typography } from '@mui/material';
import { TITLE_WITH_BORDER_BOTTOM } from 'styles/constants';

export const Settings = () => {
  return (
    <Box>
      <Typography variant="h1" sx={TITLE_WITH_BORDER_BOTTOM}>
        Account Setting
      </Typography>
      <Typography variant="h2" sx={{ marginTop: '65px' }}>
        Change password
      </Typography>
      <Box sx={{ marginTop: '62px' }}>
        <SettingsForm />
      </Box>
    </Box>
  );
};
