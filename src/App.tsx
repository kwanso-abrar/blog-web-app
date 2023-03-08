import { router } from 'navigation';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { RouteMiddleware, RouterSwitch } from 'react-typesafe-routes';

const loggedIn = false;

const AuthMiddleware: RouteMiddleware = (next: any) => {
  if (loggedIn) {
    return next;
  } else {
    // eslint-disable-next-line react/display-name
    return () => <Redirect to={router().signin().$} />;
  }
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <RouterSwitch router={router(AuthMiddleware)} />
      </BrowserRouter>
    </div>
  );
};

export default App;
