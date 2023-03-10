import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from 'components';

export const MainLayout = () => (
  <Box>
    <Header />
    <Outlet />
    <Footer />
  </Box>
);
