import { Toaster } from 'react-hot-toast';
import { isToken } from 'utils';
import { useState } from 'react';
import { mainRoutes } from 'routes';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { ApolloProvider } from '@apollo/client';
import { Signin, Signup } from 'pages';
import { AuthLayout, MainLayout } from 'layouts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import theme from 'theme';
import client from 'graphql/client';
import AppContext from 'AppContext';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(isToken());

  return (
    <div>
      <ApolloProvider client={client}>
        <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
          <Toaster />
          <ThemeProvider theme={theme}>
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
          </ThemeProvider>
        </AppContext.Provider>
      </ApolloProvider>
    </div>
  );
};

export default App;
