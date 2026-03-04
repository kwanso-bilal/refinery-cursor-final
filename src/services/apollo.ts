import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

const AUTH_TOKEN_KEY = 'refinery_auth_token';

function getAuthToken(): string | null {
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

export function setAuthToken(token: string): void {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
}

export function clearAuthToken(): void {
  localStorage.removeItem(AUTH_TOKEN_KEY);
}

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_GRAPHQL_HTTP_URI ?? 'https://api.app-stage.tracking-unlimited.com/graphql',
});

const authLink = new ApolloLink((operation, forward) => {
  const token = getAuthToken();
  if (token) {
    operation.setContext({
      headers: {
        ...operation.getContext().headers,
        authorization: `Bearer ${token}`,
      },
    });
  }
  return forward(operation);
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: { errorPolicy: 'all' },
    query: { errorPolicy: 'all' },
    mutate: { errorPolicy: 'all' },
  },
});
