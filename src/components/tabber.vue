<template>
  <div>
    <mt-tabbar v-model="selected" fix style="margin-top:1px">
      <mt-tab-item id="main">
        <img slot="icon" src="../../images/food.svg">
        首页
      </mt-tab-item>
      <mt-tab-item id="cart">
        <img slot="icon" src="../../images/cart.svg">
        购物车
      </mt-tab-item>
      <mt-tab-item id="me">
        <img slot="icon" src="../../images/me.svg">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
    data() {
        return {
            selected: 'main'
        }
    },
    watch: {
        'selected': {
            handler() {
                if(this.selected == 'main') {
                    this.$router.push('/index')
                } else if(this.selected == 'cart') {
                    this.$router.push('/cart')
                } else {
                    this.$router.push('/me')
                }
            }
        }
    },
    mounted() {
        this.$router.push('/index')
    }
}
</script>