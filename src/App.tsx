import { Toaster } from 'react-hot-toast';
import { isToken } from 'utils/SessionManagement';
import { useState } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { ApolloProvider } from '@apollo/client';
import { Home, Signin, Signup } from 'pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import theme from 'theme';
import Layout from 'layouts/layout';
import client from 'graphql/client';
import Protected from 'navigation/Protected';
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
              <Layout>
                <Routes>
                  <Route path="/signin" element={<Signin />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route
                    path=""
                    element={
                      <Protected>
                        <Home />
                      </Protected>
                    }
                  />
                </Routes>
              </Layout>
            </BrowserRouter>
          </ThemeProvider>
        </AppContext.Provider>
      </ApolloProvider>
    </div>
  );
};

export default App;
