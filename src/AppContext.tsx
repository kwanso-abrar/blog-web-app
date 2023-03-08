import { createContext, Dispatch, SetStateAction, useContext } from 'react';

type ContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
};

const AppContext = createContext<ContextType>({
  isLoggedIn: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsLoggedIn: () => {},
});

export const useContextApi = () => useContext(AppContext);
export default AppContext;
