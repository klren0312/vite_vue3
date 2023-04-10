import { createApp } from 'vue'
import './assets/scss/common.scss'
import App from './App.vue'
import { createPinia } from 'pinia'
import { setupRouter } from './routers'

const app = createApp(App)
setupRouter(app)
app.use(createPinia())

app.mount('#app')
