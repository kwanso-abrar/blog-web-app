import { Protected } from 'components';
import { RouteProps } from 'react-router-dom';
import { ROUTES_PATH } from '../constants';
import {
  Home,
  ReadBlog,
  Settings,
  CreatePost,
  MyArticles,
  ChatPlayground,
  ReadBlogBySearch
} from 'pages';

export const mainRoutes: RouteProps[] = [
  {
    path: ROUTES_PATH.home,
    element: <Home />
  },
  {
    path: ROUTES_PATH.myArticles,
    element: (
      <Protected>
        <MyArticles />
      </Protected>
    )
  },
  {
    path: ROUTES_PATH.createPost,
    element: (
      <Protected>
        <CreatePost />
      </Protected>
    )
  },
  {
    path: ROUTES_PATH.settings,
    element: (
      <Protected>
        <Settings />
      </Protected>
    )
  },
  {
    path: ROUTES_PATH.chatPlayground,
    element: (
      <Protected>
        <ChatPlayground />
      </Protected>
    )
  },
  {
    path: `${ROUTES_PATH.readBlog}/:id`,
    element: <ReadBlog />
  },
  {
    path: `${ROUTES_PATH.readBlogBySearch}/:search`,
    element: <ReadBlogBySearch />
  }
];
