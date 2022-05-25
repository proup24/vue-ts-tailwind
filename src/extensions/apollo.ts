import {
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

const httpLink = createHttpLink({
  uri: 'https://graphqlzero.almansi.me/api'
})
const cache = new InMemoryCache()
const apolloClient = new ApolloClient({
  link: httpLink,
  cache
})
export { apolloClient, DefaultApolloClient }
