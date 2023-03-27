import { HeaderNavLinkType } from 'types';

export const BLOGII_AUTH_TOKEN_KEY = 'auth_token';

export const BLOGS_PER_PAGE = 3;

export const ROUTES_PATH = {
  home: '/',
  signin: '/signin',
  signup: '/signup',
  readBlog: '/read/:id',
  settings: '/settings',
  createPost: '/create',
  myArticles: '/my-articles',
  readBlogBySearch: '/read-by-search/:search'
};

export const CREATE_POST_MIN_TO_READ_SELECT_OPTIONS = [
  {
    value: 1,
    label: '1 Min. To Read'
  },
  {
    value: 2,
    label: '2 Min. To Read'
  },
  {
    value: 3,
    label: '3 Min. To Read'
  }
];

export const HEADER_NAV_LINKS: HeaderNavLinkType[] = [
  {
    id: 1,
    to: ROUTES_PATH.home,
    text: 'Home',
    isProtected: false
  },
  {
    id: 2,
    to: ROUTES_PATH.myArticles,
    text: 'My Articles',
    isProtected: true
  }
];
