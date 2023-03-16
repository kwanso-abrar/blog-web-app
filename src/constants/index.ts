import { NavigationButtonProps } from 'types';

export const BLOGII_AUTH_TOKEN_KEY = 'auth_token';

export const dummy = 'dummy';

export const navigationButtonsData: NavigationButtonProps[] = [
  {
    id: 1,
    text: 'Create posst',
    path: '/create'
  },
  {
    id: 2,
    text: 'Read posts',
    path: '/read-all'
  },
  {
    id: 3,
    text: 'Update post',
    path: '/update'
  },
  {
    id: 4,
    text: 'Logout'
  }
];
