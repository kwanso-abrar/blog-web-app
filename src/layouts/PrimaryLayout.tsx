import { Box } from '@mui/material';
import { router } from 'navigation';
import { PrimaryFooter } from 'components';
import { useRouteOptions } from 'react-typesafe-routes';
import PrimaryHeader from 'components/header/PrimaryHeader';

type PrimaryLayoutProps = {
  children: React.ReactElement;
};

const PrimaryLayout = ({ children }: PrimaryLayoutProps) => {
  const { showHeader, showFooter } = useRouteOptions(router());
  return (
    <Box>
      {showHeader && <PrimaryHeader />}
      {children}
      {showFooter && <PrimaryFooter />}
    </Box>
  );
};

export default PrimaryLayout;
