import { Socket } from 'socket.io-client';
import { createContext, Dispatch, SetStateAction, useContext } from 'react';

type ContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  socketConnection: Socket | undefined;
  setSocketConnection: Dispatch<SetStateAction<Socket | undefined>>;
};

const AppContext = createContext<ContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  socketConnection: undefined,
  setSocketConnection: () => {}
});

export const useContextApi = () => useContext(AppContext);
export default AppContext;
