import { Toaster } from 'react-hot-toast';
import { isToken } from 'utils';
import { useState } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { ApolloProvider } from '@apollo/client';
import { AuthLayout, MainLayout } from 'layouts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreatePost, Home, ReadAllPost, Signin, Signup, UpdatePost } from 'pages';
import theme from 'theme';
import client from 'graphql/client';
import Protected from 'routes/Protected';
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
                  <Route
                    path=""
                    element={
                      <Protected>
                        <Home />
                      </Protected>
                    }
                  />
                  <Route
                    path="/create"
                    element={
                      <Protected>
                        <CreatePost />
                      </Protected>
                    }
                  />
                  <Route
                    path="/read-all"
                    element={
                      <Protected>
                        <ReadAllPost />
                      </Protected>
                    }
                  />
                  <Route
                    path="/update"
                    element={
                      <Protected>
                        <UpdatePost />
                      </Protected>
                    }
                  />
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
