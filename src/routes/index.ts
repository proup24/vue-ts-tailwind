import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/posts',
    name: 'Posts',
    component: () =>
      import('../pages/Posts.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach(() => {
  window.scrollTo(0, 0)
})

export default router
