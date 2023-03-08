import { Routes } from './routes';
import { OptionsRouter, RouteMiddleware } from 'react-typesafe-routes';
import { Home, Signin, Signup } from 'pages';

export const router = (AuthMiddleware?: RouteMiddleware) => {
  const defaultOptions = {
    showFooter: true,
    showHeader: true,
  };
  const routes = OptionsRouter(defaultOptions, (route) => ({
    signup: route(Routes.SIGNUP, {
      component: Signup,
      options: {
        showFooter: false,
        showHeader: false,
      },
    }),
    signin: route(Routes.SIGNIN, {
      component: Signin,
      options: {
        showFooter: false,
        showHeader: false,
      },
    }),
    home: route(Routes.HOME, {
      component: Home,
      middleware: AuthMiddleware,
    }),
  }));
  return routes;
};

export default router;
