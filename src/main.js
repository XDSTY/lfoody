// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Meta from 'vue-meta'
import { MessageBox, Popup, Picker, Switch } from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.component(MessageBox.name, MessageBox)
Vue.component(Popup.name, Popup)
Vue.component(Picker.name, Picker)
Vue.component(Switch.name, Switch)
Vue.use(Meta)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
