import { Protected } from './Protected';
import { RouteProps } from 'react-router-dom';
import { CreatePost, Home, MyArticles, ReadAllPost, Settings, UpdatePost } from 'pages';

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
    path: '/read-all',
    element: (
      <Protected>
        <ReadAllPost />
      </Protected>
    )
  },
  {
    path: '/update',
    element: (
      <Protected>
        <UpdatePost />
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
