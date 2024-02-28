import type { App } from 'vue'
import * as NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { createRouter, createWebHashHistory } from 'vue-router'
import BasicRoute, { rootRoute } from './routes/basic'

NProgress.configure({ showSpinner: false })
const WHITE_NAME_LIST: string[] = []

const getRouteNames = (array: any[]) => {
  array.forEach((item) => {
    WHITE_NAME_LIST.push(item.name as string)
    getRouteNames((item.children as any[]) || [])
  })
}

getRouteNames(BasicRoute)

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [...BasicRoute, ...rootRoute],
  scrollBehavior: () => ({
    left: 0,
    top: 0,
  }),
})

// 退出登录重置路由
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !WHITE_NAME_LIST.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

// 配置路由
export function setupRouter(app: App<Element>) {
  app.use(router)
}

router.beforeEach(async (_to, _from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
