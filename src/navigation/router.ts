import { Routes } from './routes';
import { Home, Signin, Signup } from 'pages';
import { OptionsRouter, RouteMiddleware } from 'react-typesafe-routes';

export const router = (AuthMiddleware?: RouteMiddleware) => {
  const defaultOptions = {
    isSecondaryLayout: false,
    isPrimaryLayout: false,
  };
  const routes = OptionsRouter(defaultOptions, (route) => ({
    signup: route(Routes.SIGNUP, {
      component: Signup,
      options: {
        isSecondaryLayout: true,
      },
    }),
    signin: route(Routes.SIGNIN, {
      component: Signin,
      options: {
        isSecondaryLayout: true,
      },
    }),
    home: route(Routes.HOME, {
      component: Home,
      options: {
        isPrimaryLayout: true,
      },
      middleware: AuthMiddleware,
    }),
  }));
  return routes;
};

export default router;
