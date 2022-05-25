import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { apolloClient, DefaultApolloClient } from '@/extensions/apollo'
import App from './App.vue'
import './css/index.css'

createApp(App)
  .provide(DefaultApolloClient, apolloClient)
  .use(createPinia())
  .mount('#app')
