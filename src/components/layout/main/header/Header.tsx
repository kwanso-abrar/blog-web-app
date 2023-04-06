import { useAuth } from 'customHooks';
import { MobileHeader } from './MobileHeader';
import { DesktopHeader } from './DesktopHeader';
import { HeaderWrapper } from 'styles';
import { useContextApi } from 'AppContext';
import { HEADER_SCROLL_BEHAVIOUR } from 'styles/constants';
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
      if (window.scrollY > headerRef.current?.offsetHeight)
        headerRef.current.style.cssText += HEADER_SCROLL_BEHAVIOUR.sticky;
      else if (window.scrollY === 0) {
        headerRef.current.style.cssText += HEADER_SCROLL_BEHAVIOUR.nonSticky;
        headerRef.current.style.top = `-${headerRef.current?.offsetHeight - 10}px`;
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
