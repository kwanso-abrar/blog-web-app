import { Header } from 'components';
import { Outlet } from 'react-router-dom';
import { Box, Stack } from '@mui/material';

export const MainLayout = () => (
  <Stack justifyContent="space-between">
    <Header />
    <Box>
      <Outlet />
    </Box>
  </Stack>
);
