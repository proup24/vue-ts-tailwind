import { useQuery } from '@vue/apollo-composable'
import { GET_POSTS_QUERY } from '@/graphql/posts/queries'
import {
  GetPostsQuery,
  GetPostsQueryVariables
} from '@/generated/apollo-components'
export const usePosts = (
  getPostsQueryVariables: GetPostsQueryVariables = {}
) => {
  return useQuery<GetPostsQuery, GetPostsQueryVariables>(
    GET_POSTS_QUERY,
    getPostsQueryVariables
  )
}
