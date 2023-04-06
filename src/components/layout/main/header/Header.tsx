import { useLogout } from 'customHooks';
import { MobileHeader } from './MobileHeader';
import { DesktopHeader } from './DesktopHeader';
import { useContextApi } from 'AppContext';
import { useMediaQuery, useTheme } from '@mui/material';

export const Header = () => {
  const theme = useTheme();
  const logout = useLogout();
  const { isLoggedIn } = useContextApi();
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {isMobileView ? (
        <MobileHeader isLoggedIn={isLoggedIn} logout={logout} />
      ) : (
        <DesktopHeader isLoggedIn={isLoggedIn} logout={logout} />
      )}
    </>
  );
};
