import { router } from 'navigation';
import { Toaster } from 'react-hot-toast';
import { getToken } from 'utils/SessionManagement';
import { useState } from 'react';
import { CssBaseline } from '@mui/material';
import { PrimaryLayout } from 'layouts';
import { ThemeProvider } from '@mui/material/styles';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { RouteMiddleware, RouterSwitch } from 'react-typesafe-routes';
import theme from 'theme';
import client from 'graphql/client';
import AppContext from 'AppContext';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(getToken() ? true : false);

  const AuthMiddleware: RouteMiddleware = (next: any) => {
    if (isLoggedIn) {
      return next;
    } else {
      // eslint-disable-next-line react/display-name
      return () => <Redirect to={router().signin().$} />;
    }
  };

  return (
    <div>
      <ApolloProvider client={client}>
        <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
          <Toaster />
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter forceRefresh>
              <PrimaryLayout>
                <RouterSwitch router={router(AuthMiddleware)} />
              </PrimaryLayout>
            </BrowserRouter>
          </ThemeProvider>
        </AppContext.Provider>
      </ApolloProvider>
    </div>
  );
};

export default App;
