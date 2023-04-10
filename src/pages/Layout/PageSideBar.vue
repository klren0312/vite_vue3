<template>
  <el-menu class="page-side-bar" router :default-active="activeMenu">
    <template v-for="item in routerArr" :key="item.name">
      <el-sub-menu  v-if="!item.meta.hideChildMenu" index="item.path">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <template v-for="menuItem in item.children" :key="menuItem.name">
          <el-menu-item :index="menuItem.path">{{ menuItem.meta.title }}</el-menu-item>
        </template>
      </el-sub-menu>
      <el-menu-item v-else :index="item.path">
        <el-icon>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script lang="ts" setup>
import {
  ElIcon,
  ElMenu,
  ElMenuItem,
  ElSubMenu
} from 'element-plus'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { routerArr } from '/@/routers'
const $route = useRoute()
const activeMenu = computed(() => {
  let path = $route.path
  if ($route.path === '/homePage') {
    path = '/'
  }
  return path
})
</script>
<style lang="scss">
.page-side-bar {
  width: 200px;
  height: 100%;
}
</style>
