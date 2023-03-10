import { RouteProps } from 'react-router-dom';
import { Home, Signin, Signup } from 'pages';
import Protected from './Protected';

type CustomRouteProps = RouteProps & {
  key: number;
};

const appRoutes: CustomRouteProps[] = [
  {
    key: 1,
    path: '/',
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
  },
  {
    key: 2,
    path: '/signin',
    element: <Signin />,
  },
  {
    key: 3,
    path: '/signup',
    element: <Signup />,
  },
];

export default appRoutes;
