import { Box } from '@mui/material';
import PrimaryLayout from './PrimaryLayout';
// import SecondaryLayout from './SecondaryLayout';

type LayoutProps = {
  children: React.ReactElement;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <PrimaryLayout>{children}</PrimaryLayout>
      {/* <SecondaryLayout>{children}</SecondaryLayout> */}
    </Box>
  );
};

export default Layout;
