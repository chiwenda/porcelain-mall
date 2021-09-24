<template>
  <div class="login">
    <div class="outer-title">
      <div style="padding: 0 60px 0 0;">
        <h3 class="big-title">
          系统后台
        </h3>
      </div>
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        label-position="left"
        label-width="0px"
        class="login-form"
      >
        <h3 class="title">
          后台系统-0.1
        </h3>
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" type="text" auto-complete="off" placeholder="账号">
            <svg-icon slot="prefix" icon-class="user" class="el-input__icon input-icon" />
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            auto-complete="off"
            placeholder="密码"
            @keyup.enter.native="handleLogin"
          >
            <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon" />
          </el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            auto-complete="off"
            placeholder="验证码"
            style="width: 63%;"
            @keyup.enter.native="handleLogin"
          >
            <svg-icon slot="prefix" icon-class="validCode" class="el-input__icon input-icon" />
          </el-input>
          <div class="login-code">
            <img :src="codeUrl" @click="getCode" />
          </div>
        </el-form-item>
        <el-checkbox v-model="loginForm.rememberMe" style="margin: 0 0 25px 0;">
          记住我
        </el-checkbox>
        <el-form-item style="width: 100%;">
          <el-button
            :loading="loading"
            size="medium"
            type="primary"
            style="width: 100%;"
            @click.native.prevent="handleLogin"
          >
            <span v-if="!loading">登 录</span>
            <span v-else>登 录 中...</span>
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {},
  data() {
    return {
      property: 'value',
      loginForm:[]
    }
  },
  created() {},
  methods: {
    handleLogin() {},
    getCode() {},
  },
})
</script>
<style lang="scss">
@import '../assets/styles/login/login-styles.scss';
</style>
