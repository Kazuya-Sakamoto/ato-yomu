import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

// const API_URL = 'http://10.0.2.2:3000/graphql'; // ✅ Android
const API_URL = 'http://192.168.11.3:3000/graphql'; // ✅ 実機

const client = new ApolloClient({
  link: new HttpLink({
    uri: API_URL,
    fetch: fetch,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
