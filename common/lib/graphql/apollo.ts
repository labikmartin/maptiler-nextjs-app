import { ApolloClient, InMemoryCache } from '@apollo/client';

const uri = process.env.NEXT_PUBLIC_API_URL;

export const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});
