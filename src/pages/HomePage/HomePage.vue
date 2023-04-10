<template>
  <div class="home-page">
    test
    <el-button type="primary" size="default" @click="toTable">toTable</el-button>
  </div>
</template>
<script lang="ts" setup>
import { ElButton } from 'element-plus'
import { useRouter } from 'vue-router'
const $router = useRouter()
const toTable = () => {
  $router.push({
    name: 'TablePage'
  })
}
</script>
