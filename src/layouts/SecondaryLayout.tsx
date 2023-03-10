import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const SecondaryLayout = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  );
};

export default SecondaryLayout;
