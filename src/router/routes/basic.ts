import { LAYOUT, PAGE_NOT_FOUND_NAME, PAGE_SERVER_ERROR_NAME } from '/@/router/constant'
import type { RouteRecordRaw } from 'vue-router'
import MenuRoute from './menu'

const loginRoute: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('/@/views/LoginPage/index.vue'),
    meta: {
      title: '登录页',
      hideBreadcrumb: true,
      hidden: true,
    },
  },
]

export const rootRoute: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Root',
    component: LAYOUT,
    redirect: '/home/index',
    meta: {
      hidden: true,
    },
    children: [],
  },
  ...MenuRoute,
]

const errorRoute = [
  {
    path: '/500',
    name: PAGE_SERVER_ERROR_NAME,
    component: () => import('/@/views/Error/500.vue'),
    meta: {
      title: 'Error5xxPage',
      hideBreadcrumb: true,
      hideMenu: true,
      noAuth: true,
    },
  },
  {
    path: '/:path(.*)*',
    name: PAGE_NOT_FOUND_NAME,
    component: () => import('/@/views/Error/404.vue'),
    meta: {
      title: 'Error4xxPage',
      hideBreadcrumb: true,
      hideMenu: true,
      noAuth: true,
    },
  },
]

export default [...loginRoute, ...errorRoute]
