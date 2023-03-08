const TOKEN_KEY = 'TOKEN_KEY';
const USER_SESSION_KEY = 'USER_SESSION_KEY';

export const saveSession = (credentials: any) => {
  localStorage.setItem(USER_SESSION_KEY, JSON.stringify(credentials));
  return true;
};

export const getSession = () => {
  const session = localStorage.getItem(USER_SESSION_KEY);
  return session ? JSON.parse(session) : undefined;
};

export function saveToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function getToken() {
  const token = localStorage.getItem(TOKEN_KEY);
  return token ? token : '';
}

export function deleteToken() {
  localStorage.removeItem(TOKEN_KEY);
  return true;
}

export function deleteSession() {
  localStorage.removeItem(USER_SESSION_KEY);
  return true;
}

export function isSession() {
  const session = localStorage.getItem(USER_SESSION_KEY);
  return !!session;
}

export function isToken() {
  const token = localStorage.getItem(TOKEN_KEY);
  return !!token;
}
