<template>
  <div class="flex justify-around">
    <div>
      <span v-if="postsLoading"> Loading posts... </span>
      <span v-if="postsError">Error: {{ postsError.message }}</span>
      <code v-if="posts">
        <pre>
        {{ JSON.stringify(posts, undefined, 4) }}
      </pre
        >
      </code>
    </div>
    <div>
      <button
        type="button"
        class="border border-black p-2"
        @click="fetchPost = true"
      >
        Fetch Post
      </button>
      <span v-if="postLoading"> Loading post... </span>
      <span v-if="postError">Error: {{ postError.message }}</span>
      <code v-if="post">
        <pre>
        {{ JSON.stringify(post, undefined, 4) }}
      </pre
        >
      </code>
    </div>
  </div>
</template>

<script setup lang="ts">
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import {
  GetPostsQuery,
  GetPostsQueryVariables,
  GetPostQuery,
  GetPostQueryVariables
} from '@/generated/apollo-components'
import { ref } from 'vue'

const GET_POSTS_QUERY = gql`
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
const GET_POST_QUERY = gql`
  query getPost($id: ID!) {
    post(id: $id) {
      id
      title
    }
  }
`

const {
  result: posts,
  loading: postsLoading,
  error: postsError
} = useQuery<GetPostsQuery, GetPostsQueryVariables>(GET_POSTS_QUERY, {
  options: { paginate: { page: 1 } }
})

const fetchPost = ref(false)

const {
  result: post,
  loading: postLoading,
  error: postError
} = useQuery<GetPostQuery, GetPostQueryVariables>(
  GET_POST_QUERY,
  { id: '10' },
  () => ({ enabled: fetchPost.value })
)
</script>
