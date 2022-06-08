import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { apolloClient, DefaultApolloClient } from '@/extensions/apollo'
import router from './routes'
import App from './App.vue'
import './css/index.css'

createApp(App)
  .provide(DefaultApolloClient, apolloClient)
  .use(router)
  .use(createPinia())
  .mount('#app')
