import { router } from 'navigation';
import { PrimaryLayout } from 'layouts';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { RouteMiddleware, RouterSwitch } from 'react-typesafe-routes';
import { useState } from 'react';
import AppContext from 'AppContext';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

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
      <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <BrowserRouter>
          <PrimaryLayout>
            <RouterSwitch router={router(AuthMiddleware)} />
          </PrimaryLayout>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
};

export default App;
