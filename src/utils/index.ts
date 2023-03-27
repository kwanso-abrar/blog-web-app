import { BLOGII_AUTH_TOKEN_KEY } from '../constants';

export function saveToken(token: string) {
  localStorage.setItem(BLOGII_AUTH_TOKEN_KEY, token);
  return true;
}

export function getToken() {
  const token = localStorage.getItem(BLOGII_AUTH_TOKEN_KEY);
  return token;
}

export function removeToken() {
  localStorage.removeItem(BLOGII_AUTH_TOKEN_KEY);
  return true;
}

export function isToken() {
  const token = localStorage.getItem(BLOGII_AUTH_TOKEN_KEY);
  return !!token;
}
