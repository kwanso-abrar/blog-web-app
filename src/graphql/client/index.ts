import { getToken } from 'utils';
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

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;
