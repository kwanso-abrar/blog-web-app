import { AutoCompleteContextType } from 'types';
import { createContext, useContext } from 'react';

export const AutoCompleteContext = createContext<AutoCompleteContextType>({
  position: -1,
  isLoading: false
});

export const useAutoCompleteContextContext = () => useContext(AutoCompleteContext);
