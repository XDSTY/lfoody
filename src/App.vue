<template>
  <div id="app">
    <div class="content-div">
      <router-view/>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import Footer from '@/components/tabber.vue'
export default {
  name: 'App',
  components: {
    'footer-bar': Footer
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
  margin-top: 20px;
}

.content-div {
  margin-bottom: 55px;
}
</style>
