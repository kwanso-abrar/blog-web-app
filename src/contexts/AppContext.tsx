import { Socket } from 'socket.io-client';
import { createContext, Dispatch, SetStateAction, useContext } from 'react';

type ContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  socketConnection: Socket | undefined;
  setSocketConnection: Dispatch<SetStateAction<Socket | undefined>>;
};

export const AppContext = createContext<ContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  socketConnection: undefined,
  setSocketConnection: () => {}
});

export const useAppContext = () => useContext(AppContext);
