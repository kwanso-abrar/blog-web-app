import { Routes } from './routes';
import { OptionsRouter, RouteMiddleware } from 'react-typesafe-routes';
import { Home, Signin, Signup } from 'pages';

export const router = (AuthMiddleware?: RouteMiddleware) => {
  const defaultOptions = {};
  const routes = OptionsRouter(defaultOptions, (route) => ({
    signup: route(Routes.SIGNUP, {
      component: Signup,
    }),
    signin: route(Routes.SIGNIN, {
      component: Signin,
    }),
    home: route(Routes.HOME, {
      component: Home,
      middleware: AuthMiddleware,
    }),
  }));
  return routes;
};

export default router;
