import { Box } from '@mui/material';
import { PrimaryFooter } from 'components';
import PrimaryHeader from 'components/header/PrimaryHeader';

type PrimaryLayoutProps = {
  children: React.ReactElement;
};

const PrimaryLayout = ({ children }: PrimaryLayoutProps) => {
  return (
    <Box>
      <PrimaryHeader />
      {children}
      <PrimaryFooter />
    </Box>
  );
};

export default PrimaryLayout;
