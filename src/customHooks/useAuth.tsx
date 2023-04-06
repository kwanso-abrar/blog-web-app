import { useCallback } from 'react';
import { useContextApi } from 'AppContext';
import { removeToken, saveToken } from 'utils';

export const useAuth = () => {
  const { setIsLoggedIn } = useContextApi();

  const logout = useCallback(() => {
    removeToken();
    setIsLoggedIn(false);
  }, []);

  const login = useCallback((token?: string) => {
    if (token) saveToken(token);
    setIsLoggedIn(true);
  }, []);

  return { logout, login };
};
