<template>
  <el-config-provider :locale="locale">
    <RouterView></RouterView>
  </el-config-provider>
</template>
<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
const locale = zhCn
defineOptions({
  name: 'App',
})
</script>
<style scoped>
body,
html {
  padding: 0;
}
</style>
