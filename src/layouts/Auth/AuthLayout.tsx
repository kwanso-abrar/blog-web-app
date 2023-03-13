import { Box } from '@mui/material';
import { Navigate, Outlet } from 'react-router-dom';
import { useContextApi } from 'AppContext';

export const AuthLayout = () => {
  const { isLoggedIn } = useContextApi();
  if (isLoggedIn) {
    return <Navigate to="" replace />;
  }
  return (
    <Box>
      <Outlet />
    </Box>
  );
};
