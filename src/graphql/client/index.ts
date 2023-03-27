import { ROUTES_PATH } from '../../constants';
import { getToken, removeToken } from 'utils';
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client';

const httpLink = new HttpLink({ uri: 'http://localhost:3001/graphql' });

const authLink = new ApolloLink((operation, forward) => {
  const token = getToken();

  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }
  });

  return forward(operation);
});

const logoutOnTokenExpire = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    if (response && response.errors && response.errors[0].message.includes('Forbidden')) {
      removeToken();
      window.location.replace(ROUTES_PATH.signin.path);
    }
    return response;
  });
});

const client = new ApolloClient({
  link: authLink.concat(logoutOnTokenExpire).concat(httpLink),
  cache: new InMemoryCache()
});

export default client;
