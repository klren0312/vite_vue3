<template>
  <div class="login-page">
    <div class="the-title">xxxxxxxx</div>
    <div class="login-block">
      <el-form ref="form" :model="loginForm" :rules="loginRules" label-position="top">
        <el-form-item label="开发者账号" prop="account">
          <el-input
            class="login-input"
            placeholder="请输入开发者账号"
            v-model="loginForm.account"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            class="login-input"
            placeholder="请输入密码"
            type="password"
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="login-btn-block">
        <el-button type="primary">登录</el-button>
        <div>
          <!-- <div>成为全息开发者</div> -->
          <el-link type="primary">联系我们</el-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'

defineOptions({
  name: 'LoginPage',
})
const loginRules = {
  account: [{ required: true, message: '请输入开发者账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
}
const loginForm = reactive({
  account: '',
  password: '',
})
</script>
<style lang="scss" scoped>
.the-title {
  padding: 10px;
  color: #fff;
  font-size: 28px;
  font-weight: bold;
}
.login-page {
  position: relative;
  height: 100vh;
  background: url('/@/assets/images/login-bg.jpg') center / 100% 100% no-repeat;
}
.login-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 72px 32px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
.login-input {
  width: 300px;
}
.login-btn-block {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}
</style>
