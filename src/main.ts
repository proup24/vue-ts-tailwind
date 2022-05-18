import { createApp, h, provide } from 'vue'
import { createPinia } from 'pinia'
import { apolloClient, DefaultApolloClient } from '@/extensions/apollo'
import App from './App.vue'
import './css/index.css'

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App)
})
app.use(createPinia())
app.mount('#app')
