import { LAYOUT } from '../constant'
import type { RouteRecordRaw } from 'vue-router'
const menuRoute: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'Home',
    component: LAYOUT,
    redirect: '/home/index',
    meta: {
      title: '内容管理',
      hidden: false,
      icon: 'Picture',
      pid: 0,
    },
    children: [
      {
        path: 'index',
        name: 'HomePage',
        meta: {
          title: '首页',
          hidden: false,
        },
        component: () => import('/@/views/HomePage/index.vue'),
      },
    ],
  },
]

export default menuRoute
