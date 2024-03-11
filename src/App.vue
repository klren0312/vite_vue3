<template>
  <el-config-provider :locale="locale">
    <RouterView></RouterView>
  </el-config-provider>
</template>
<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { GetApi } from '/@/apis/test.api'
import { onMounted } from 'vue'
const locale = zhCn
defineOptions({
  name: 'App',
})

onMounted(async () => {
  const res = await GetApi()
  console.log(res)
})
</script>
<style scoped>
body,
html {
  padding: 0;
}
</style>
