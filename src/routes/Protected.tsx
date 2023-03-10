import { Navigate } from 'react-router-dom';
import { useContextApi } from 'AppContext';

type ProtectedProps = {
  children: React.ReactElement;
};

const Protected = ({ children }: ProtectedProps) => {
  const { isLoggedIn } = useContextApi();
  if (!isLoggedIn) {
    return <Navigate to="/signin" replace />;
  }
  return children;
};
export default Protected;
