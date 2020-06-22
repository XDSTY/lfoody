<template>
  <div>
    <!-- 品牌 -->
    <div style="height: .75rem;"></div>
    <div class="ziye_toub">
      <p>登录</p>
    </div>
    <!-- 头部 -->
    <div class="logo_we">
        <img class="logo" src="../assets/images/logo.jpg" alt="">
        <div class="biaod">
            <input type="text" placeholder="请输入手机号码" v-model="user.phone">
            <input type="password" placeholder="请输入登录密码" v-model="user.password">
            <!-- <a href="#" class="wanji">忘记密码？</a> -->
            <input type="button" class="anniu_w" value="登录" v-on:click="login"> 
        </div>
    </div>
    <div class="ditu_zc">
      <p>还没有账号？</p>
      <a v-on:click="register">立即注册</a>
    </div>
  </div>
</template>

<script>
import {user} from '../service/service'
import {setStore} from '../service/storage'
export default {
  data: function () {
      return {
        user: {
          phone: '',
          password: ''
        }
      }
  },
  methods: {
    register() {
      this.$router.push('/register')
    },
    login() {
      user.login(this.user)
        .then((res) => {
          if(res.code == 1 && res.data.token) {
            setStore('accessToken', res.data.token)
            this.$router.push('/index')
          }
        })
    }
  }
}
</script>

<style>
</style>
