<template>
  <div id="app">
    <div class="content-div">
      <router-view/>
    </div>
  </div>
</template>

<script>
import './assets/css/index.css'
import './assets/css/mui.min.css'
import './assets/css/swiper.min.css'
export default {
  name: 'App',
  components: {
  }
}
</script>

<style scoped="">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

.content-div {
  margin-bottom: 55px;
  margin-top: 10px;
}
</style>
