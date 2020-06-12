<template>
  <div>
    <mt-header fixed title="八哥">
      <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        <img slot="icon">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon">
        我的
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>
export default {
  data: function () {
      return {
      }
  }
}
</script>

<style scoped>

</style>
