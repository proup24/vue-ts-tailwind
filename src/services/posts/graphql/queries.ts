import gql from 'graphql-tag'

export const getPostsQuery = gql`
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
