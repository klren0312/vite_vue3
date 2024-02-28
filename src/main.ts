import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { createPinia } from 'pinia'
import { setupIcon } from '/@/utils/setupIcon'

const pinia = createPinia()
const app = createApp(App)

// 配置element-plus icon
setupIcon(app)

// 配置pinia
app.use(pinia)

// 配置路由
setupRouter(app)

app.mount('#app')
