import { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../pages/Layout/PageLayout.vue'
import {
  Document,
  Setting,
} from '@element-plus/icons-vue'
export const routerArr = [
  {
    path: '/',
    name: 'Root',
    component: Layout,
    redirect: '/homePage',
    meta: {
      title: '首页',
      hideChildMenu: true,
      icon: Document
    },
    children: [
      {
        path: '/homePage',
        name: 'HomePage',
        meta: {
          title: '首页'
        },
        component: () => import('../pages/HomePage/HomePage.vue')
      },
    ]
  },
  {
    path: '/module',
    name: 'ModuleMenu',
    component: Layout,
    redirect: '/module/tablePage',
    meta: {
      title: '测试模块',
      icon: Setting
    },
    children: [
      {
        path: '/tablePage',
        name: 'TablePage',
        meta: {
          title: '表格页'
        },
        component: () => import('../pages/TablePage/TablePage.vue')
      },
      {
        path: '/formPage',
        name: 'FormPage',
        meta: {
          title: '表单页'
        },
        component: () => import('../pages/FormPage/FormPage.vue')
      },
    ]
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/homePage'
    },
    ...routerArr
  ]
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}
