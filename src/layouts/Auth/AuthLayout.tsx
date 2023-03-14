import { Box, styled } from '@mui/material';
import { useContextApi } from 'AppContext';
import { Navigate, Outlet } from 'react-router-dom';

const Wrapper = styled(Box)(() => ({
  paddingTop: '93px',
}));

export const AuthLayout = () => {
  const { isLoggedIn } = useContextApi();
  if (isLoggedIn) {
    return <Navigate to="" replace />;
  }

  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};
