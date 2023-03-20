import { Navigate } from 'react-router-dom';
import { useContextApi } from 'AppContext';
import { ProtectedProps } from 'types';

export const Protected = ({ children }: ProtectedProps) => {
  const { isLoggedIn } = useContextApi();
  if (!isLoggedIn) {
    return <Navigate to="" replace />;
  }
  return children;
};
