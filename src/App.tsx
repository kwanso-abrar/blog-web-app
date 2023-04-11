import { theme } from 'theme';
import { Socket } from 'socket.io-client';
import { client } from 'graphql/client';
import { Toaster } from 'react-hot-toast';
import { AppContext } from 'contexts';
import { mainRoutes } from 'routes';
import { ChatProvider } from 'components';
import { ThemeProvider } from '@mui/material/styles';
import { ApolloProvider } from '@apollo/client';
import { Signin, Signup } from 'pages';
import { getToken, isToken } from 'utils';
import { AuthLayout, MainLayout } from 'layouts';
import { createSocketConnection } from 'socket';
import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

const App = () => {
  const isSocketConnectionAlreadyEstablished = useRef<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(isToken());
  const [socketConnection, setSocketConnection] = useState<Socket | undefined>();

  useEffect(() => {
    if (
      isToken() &&
      isLoggedIn &&
      typeof socketConnection === 'undefined' &&
      !isSocketConnectionAlreadyEstablished.current
    ) {
      isSocketConnectionAlreadyEstablished.current = true;
      const socket = createSocketConnection(getToken() || '');
      setSocketConnection(socket);
    }
  }, []);

  return (
    <div>
      <ApolloProvider client={client}>
        <AppContext.Provider
          value={{ isLoggedIn, setIsLoggedIn, socketConnection, setSocketConnection }}
        >
          <ChatProvider socketConnection={socketConnection}>
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
          </ChatProvider>
        </AppContext.Provider>
      </ApolloProvider>
    </div>
  );
};

export default App;
