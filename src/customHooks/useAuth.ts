import { Chat_Action } from 'reducers';
import { useCallback } from 'react';
import { useAppContext } from 'contexts';
import { useChatContext } from 'contexts/ChatContext';
import { createSocketConnection } from 'socket';
import { removeToken, saveToken } from 'utils';

export const useAuth = () => {
  const { dispatchChatRelatedInfoAction } = useChatContext();
  const { setIsLoggedIn, setSocketConnection, socketConnection } = useAppContext();

  const logout = useCallback(() => {
    removeToken();
    setIsLoggedIn(false);
    socketConnection?.disconnect();
    setSocketConnection(undefined);
    dispatchChatRelatedInfoAction({ type: Chat_Action.ON_LOGOUT });
  }, []);

  const login = useCallback((token: string) => {
    saveToken(token);
    setIsLoggedIn(true);
    const socketConnection = createSocketConnection(token);
    setSocketConnection(socketConnection);
  }, []);

  return { logout, login };
};
