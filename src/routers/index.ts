import { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/homePage'
    },
    {
      path: '/homePage',
      name: 'HomePage',
      component: () => import('../pages/HomePage/HomePage.vue')
    }
  ]
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}
