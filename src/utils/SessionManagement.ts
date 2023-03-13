const TOKEN_KEY = 'auth_token';

export function saveToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function getToken() {
  const token = localStorage.getItem(TOKEN_KEY);
  return token ? token : '';
}

export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export function isToken() {
  const token = localStorage.getItem(TOKEN_KEY);
  return !!token;
}
