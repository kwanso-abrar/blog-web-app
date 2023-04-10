import { theme } from 'theme';
import { Socket } from 'socket.io-client';
import { client } from 'graphql/client';
import { Toaster } from 'react-hot-toast';
import { AppContext } from 'contexts';
import { OnlineUser } from 'types';
import { mainRoutes } from 'routes';
import { ChatContext } from 'contexts/ChatContext';
import { ThemeProvider } from '@mui/material/styles';
import { ApolloProvider } from '@apollo/client';
import { Signin, Signup } from 'pages';
import { getToken, isToken } from 'utils';
import { SOCKET_EVENT_LISTENER } from './constants';
import { AuthLayout, MainLayout } from 'layouts';
import { createSocketConnection } from 'socket';
import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

const App = () => {
  const isSocketConnectionAlreadyEstablished = useRef<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(isToken());
  const [onlineUsers, setOnlineUsers] = useState<OnlineUser[]>([]);
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

  useEffect(() => {
    socketConnection?.on(SOCKET_EVENT_LISTENER.onlineUsers, (data: any) => {
      const { users } = data;
      const onlineUsers: OnlineUser[] = users.map((user: any) => {
        return {
          name: user.data.name,
          socketId: user.data.socketId,
          userId: user.userId
        };
      });
      setOnlineUsers(() => onlineUsers.filter((data) => data.socketId !== socketConnection.id));

      return () => {
        socketConnection?.off(SOCKET_EVENT_LISTENER.onlineUsers);
        socketConnection?.disconnect();
      };
    });
  }, [socketConnection]);

  return (
    <div>
      <ApolloProvider client={client}>
        <AppContext.Provider
          value={{ isLoggedIn, setIsLoggedIn, socketConnection, setSocketConnection }}
        >
          <ChatContext.Provider value={{ onlineUsers, setOnlineUsers }}>
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
          </ChatContext.Provider>
        </AppContext.Provider>
      </ApolloProvider>
    </div>
  );
};

export default App;
