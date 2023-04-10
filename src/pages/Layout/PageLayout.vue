<template>
  <div class="page-layout">
    <page-header></page-header>
    <div class="container">
      <page-side-bar></page-side-bar>
      <div class="main-container">
        <div class="main-container-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import PageHeader from './PageHeader.vue'
import PageSideBar from './PageSideBar.vue'
</script>
<style lang="scss" scoped>
.page-layout {
  height: 100vh;
  .container {
    display: flex;
    height: calc(100% - 50px);
    .main-container {
      height: 100%;
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
      &-content {
        height: 100%;
      }
    }
  }
}
</style>
