import { useAuth } from 'customHooks';
import { MobileHeader } from './MobileHeader';
import { DesktopHeader } from './DesktopHeader';
import { HeaderWrapper } from 'styles';
import { useContextApi } from 'AppContext';
import { useMediaQuery, useTheme } from '@mui/material';
import { useCallback, useEffect, useRef } from 'react';

export const Header = () => {
  const theme = useTheme();
  const headerRef = useRef<HTMLDivElement>();
  const { logout } = useAuth();
  const { isLoggedIn } = useContextApi();
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

  const onHeaderScroll = useCallback(() => {
    if (headerRef.current) {
      if (window.scrollY > headerRef.current?.offsetHeight) {
        headerRef.current.style.position = 'fixed';
        headerRef.current.style.top = '0px';
        headerRef.current.style.boxShadow = '0 3px 5px rgba(57, 63, 72, 0.3)';
      } else {
        headerRef.current.style.position = 'static';
        headerRef.current.style.top = `-${headerRef.current?.offsetHeight - 10}px`;
        headerRef.current.style.boxShadow = 'none';
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onHeaderScroll);

    return () => {
      window.removeEventListener('scroll', onHeaderScroll);
    };
  }, []);

  return (
    <HeaderWrapper ref={headerRef}>
      {isMobileView ? (
        <MobileHeader isLoggedIn={isLoggedIn} logout={logout} />
      ) : (
        <DesktopHeader isLoggedIn={isLoggedIn} logout={logout} />
      )}
    </HeaderWrapper>
  );
};
