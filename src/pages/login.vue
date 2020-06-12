<template>
  <div>
    <h2>a l g</h2>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username" autoComplete="off"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" autoComplete="off"></mt-field>
    <mt-button type="primary" size="large">登录</mt-button>
  </div>
</template>


<script>
export default {
  data: function () {
      return {
          username: '',
          password: ''
      }
  }
}
</script>

<style scoped>

</style>
