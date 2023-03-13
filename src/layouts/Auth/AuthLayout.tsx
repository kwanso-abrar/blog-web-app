import { Box } from '@mui/material';
import { useContextApi } from 'AppContext';
import { Navigate, Outlet } from 'react-router-dom';

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
