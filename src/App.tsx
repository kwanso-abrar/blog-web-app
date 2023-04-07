import client from 'graphql/client';
import AppContext from 'AppContext';
import { theme } from 'theme';
import { Socket } from 'socket.io-client';
import { Toaster } from 'react-hot-toast';
import { mainRoutes } from 'routes';
import { ThemeProvider } from '@mui/material/styles';
import { ApolloProvider } from '@apollo/client';
import { Signin, Signup } from 'pages';
import { getToken, isToken } from 'utils';
import { useEffect, useState } from 'react';
import { AuthLayout, MainLayout } from 'layouts';
import { createSocketConnection } from 'socket';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(isToken());
  const [socketConnection, setSocketConnection] = useState<Socket | undefined>();

  useEffect(() => {
    if (isLoggedIn && typeof socketConnection === 'undefined' && isToken()) {
      const socket = createSocketConnection(getToken() || '');
      setSocketConnection(socket);
    }
    return () => {
      socketConnection?.disconnect();
    };
  }, []);

  useEffect(() => {
    console.log('socketConnection: ', socketConnection);

    socketConnection?.on('onlineUsers', (data: any) => {
      console.log('data', data);
    });

    return () => {
      socketConnection?.off('onlineUsers');
    };
  }, [socketConnection]);

  return (
    <div>
      <ApolloProvider client={client}>
        <AppContext.Provider
          value={{ isLoggedIn, setIsLoggedIn, socketConnection, setSocketConnection }}
        >
          <Toaster />
          <ThemeProvider theme={theme}>
            <StyledEngineProvider injectFirst>
              <CssBaseline />
              <BrowserRouter>
                <Routes>
                  <Route element={<AuthLayout />}>
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                  </Route>
                  <Route element={<MainLayout />}>
                    {mainRoutes.map((route, index) => (
                      <Route path={route.path} element={route.element} key={index} />
                    ))}
                  </Route>
                </Routes>
              </BrowserRouter>
            </StyledEngineProvider>
          </ThemeProvider>
        </AppContext.Provider>
      </ApolloProvider>
    </div>
  );
};

export default App;
