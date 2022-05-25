import { useQuery } from '@vue/apollo-composable'
import { getPostsQuery } from './graphql/queries'
import {
  GetPostsQuery,
  GetPostsQueryVariables
} from '@/generated/apollo-components'
export const usePosts = (getPostsQueryVariables: GetPostsQueryVariables) => {
  const { result, loading, error } = useQuery<GetPostsQuery>(getPostsQuery, {
    variables: getPostsQueryVariables
  })
  return { result, loading, error }
}
