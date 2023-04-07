import { useCallback } from 'react';
import { useContextApi } from 'AppContext';
import { createSocketConnection } from 'socket';
import { removeToken, saveToken } from 'utils';

export const useAuth = () => {
  const { setIsLoggedIn, setSocketConnection } = useContextApi();

  const logout = useCallback(() => {
    removeToken();
    setIsLoggedIn(false);
  }, []);

  const login = useCallback((token: string) => {
    saveToken(token);
    setIsLoggedIn(true);
    const socketConnection = createSocketConnection(token);
    setSocketConnection(socketConnection);
  }, []);

  return { logout, login };
};
