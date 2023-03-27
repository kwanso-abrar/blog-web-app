import { Protected } from 'components';
import { RouteProps } from 'react-router-dom';
import { ROUTES_PATH } from '../constants';
import { CreatePost, Home, MyArticles, ReadBlog, ReadBlogBySearch, Settings } from 'pages';

export const mainRoutes: RouteProps[] = [
  {
    path: ROUTES_PATH.home.path,
    element: <Home />
  },
  {
    path: ROUTES_PATH.myArticles.path,
    element: (
      <Protected>
        <MyArticles />
      </Protected>
    )
  },
  {
    path: ROUTES_PATH.createPost.path,
    element: (
      <Protected>
        <CreatePost />
      </Protected>
    )
  },
  {
    path: ROUTES_PATH.settings.path,
    element: (
      <Protected>
        <Settings />
      </Protected>
    )
  },
  {
    path: ROUTES_PATH.readBlog.path,
    element: <ReadBlog />
  },
  {
    path: ROUTES_PATH.readBlogBySearch.path,
    element: <ReadBlogBySearch />
  }
];
