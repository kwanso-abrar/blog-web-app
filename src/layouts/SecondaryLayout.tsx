import { Box } from '@mui/material';

type SecondaryLayoutProps = {
  children: React.ReactElement;
};

const SecondaryLayout = ({ children }: SecondaryLayoutProps) => {
  return <Box>{children}</Box>;
};

export default SecondaryLayout;
