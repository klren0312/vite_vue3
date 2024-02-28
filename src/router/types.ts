import { type RouteMeta, type RouteRecordRaw } from 'vue-router'
import { type defineComponent } from 'vue'

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>)

export interface AppRouteMeta extends RouteMeta {
  title?: string
  hidden?: boolean
  icon?: string
  alwaysShow?: boolean
  activeMenu?: string
}

// @ts-expect-error
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string
  meta: AppRouteMeta
  component?: Component | string
  components?: Component
  children?: AppRouteRecordRaw[]
}
