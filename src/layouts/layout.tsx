import { Box } from '@mui/material';
import { router } from 'navigation';
import { useRouteOptions } from 'react-typesafe-routes';
import PrimaryLayout from './PrimaryLayout';
import SecondaryLayout from './SecondaryLayout';

type LayoutProps = {
  children: React.ReactElement;
};

const Layout = ({ children }: LayoutProps) => {
  const { isPrimaryLayout, isSecondaryLayout } = useRouteOptions(router());
  return (
    <Box>
      {isPrimaryLayout && <PrimaryLayout>{children}</PrimaryLayout>}
      {isSecondaryLayout && <SecondaryLayout>{children}</SecondaryLayout>}
    </Box>
  );
};

export default Layout;
