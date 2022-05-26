import gql from 'graphql-tag'

export const GET_POSTS_QUERY = gql`
  query getPosts($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
      }
      meta {
        totalCount
      }
    }
  }
`
