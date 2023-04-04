import { MobileHeader } from './MobileHeader';
import { DesktopHeader } from './DesktopHeader';
import { useMediaQuery, useTheme } from '@mui/material';

export const Header = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

  return <>{isMobileView ? <MobileHeader /> : <DesktopHeader />}</>;
};
