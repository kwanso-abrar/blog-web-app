import { useCallback } from 'react';
import { useAppContext } from 'AppContext';
import { createSocketConnection } from 'socket';
import { removeToken, saveToken } from 'utils';

export const useAuth = () => {
  const { setIsLoggedIn, setSocketConnection, socketConnection } = useAppContext();

  const logout = useCallback(() => {
    removeToken();
    setIsLoggedIn(false);
    socketConnection?.disconnect();
    setSocketConnection(undefined);
  }, []);

  const login = useCallback((token: string) => {
    saveToken(token);
    setIsLoggedIn(true);
    const socketConnection = createSocketConnection(token);
    setSocketConnection(socketConnection);
  }, []);

  return { logout, login };
};
