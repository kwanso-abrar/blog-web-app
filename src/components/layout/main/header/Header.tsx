import { MobileHeader } from './MobileHeader';
import { DesktopHeader } from './DesktopHeader';
import { useContextApi } from 'AppContext';
import { useMediaQuery, useTheme } from '@mui/material';

export const Header = () => {
  const theme = useTheme();
  const { isLoggedIn, setIsLoggedIn } = useContextApi();
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {isMobileView ? (
        <MobileHeader isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <DesktopHeader isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
};
