import { Protected } from 'components';
import { RouteProps } from 'react-router-dom';
import { CreatePost, Home, MyArticles, Settings } from 'pages';

export const mainRoutes: RouteProps[] = [
  {
    path: '',
    element: <Home />
  },
  {
    path: '/my-articles',
    element: (
      <Protected>
        <MyArticles />
      </Protected>
    )
  },
  {
    path: '/create',
    element: (
      <Protected>
        <CreatePost />
      </Protected>
    )
  },
  {
    path: '/settings',
    element: (
      <Protected>
        <Settings />
      </Protected>
    )
  }
];
