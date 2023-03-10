import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => (
  <Box>
    <Outlet />
  </Box>
);
