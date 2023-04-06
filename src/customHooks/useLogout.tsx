import { removeToken } from 'utils';
import { useCallback } from 'react';
import { useContextApi } from 'AppContext';

export const useLogout = () => {
  const { setIsLoggedIn } = useContextApi();

  const logout = useCallback(() => {
    removeToken();
    setIsLoggedIn(false);
  }, []);

  return logout;
};
