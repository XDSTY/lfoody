// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
import axios from 'axios'
import Meta from 'vue-meta'
import { Field } from 'mint-ui'
import { Cell } from 'mint-ui'
import { Popup } from 'mint-ui'
import { Button } from 'mint-ui'
import { Checklist } from 'mint-ui'
import { DatetimePicker } from 'mint-ui'
import { Radio } from 'mint-ui'
import { Toast } from 'mint-ui'
import { Header } from 'mint-ui'
import { Tabbar, TabItem } from 'mint-ui'

Vue.use(Meta)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(MintUI)

Vue.component(Field.name, Field)
Vue.component(Button.name, Button)
Vue.component(Header.name, Header)
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
