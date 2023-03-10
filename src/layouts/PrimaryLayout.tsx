import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { PrimaryFooter } from 'components';
import PrimaryHeader from 'components/header/PrimaryHeader';

export const PrimaryLayout = () => (
  <Box>
    <PrimaryHeader />
    <Outlet />
    <PrimaryFooter />
  </Box>
);
