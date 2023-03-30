import { HeaderNavLinkType } from 'types';

export const BLOGII_AUTH_TOKEN_KEY = 'auth_token';

export const BLOGS_PER_PAGE = 3;

export const ROUTES_PATH = {
  home: { path: '/' },
  signin: { path: '/signin' },
  signup: { path: '/signup' },
  readBlog: { path: '/read/:id', params: { first: 'id' } },
  settings: { path: '/settings' },
  createPost: { path: '/create' },
  myArticles: { path: '/my-articles' },
  readBlogBySearch: { path: '/read-by-search/:search', params: { first: 'search' } }
};

export const CREATE_POST_MIN_TO_READ_SELECT_OPTIONS = [
  {
    value: '1 Min. To Read',
    label: '1 Min. To Read'
  },
  {
    value: '2 Mins. To Read',
    label: '2 Mins. To Read'
  },
  {
    value: '3 Mins. To Read',
    label: '3 Mins. To Read'
  },
  {
    value: '4 Mins. To Read',
    label: '4 Mins. To Read'
  },
  {
    value: '5 Mins. To Read',
    label: '5 Mins. To Read'
  }
];

export const HEADER_NAV_LINKS: HeaderNavLinkType[] = [
  {
    id: 1,
    to: ROUTES_PATH.home.path,
    text: 'Home',
    isProtected: false
  },
  {
    id: 2,
    to: ROUTES_PATH.myArticles.path,
    text: 'My Articles',
    isProtected: true
  }
];
