<template>
  <div>home</div>
  <el-link @click="() => $router.push('/login')" type="primary" :underline="false" target="_blank">
    to loginpage
  </el-link>
</template>
<script setup lang="ts">
defineOptions({
  name: 'HomePage',
})
</script>
