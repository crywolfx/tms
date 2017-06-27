// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import router from './router'
import axios from './http/index'
import store from './store/store'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

Vue.use(ElementUI)
Vue.component('icon', Icon)

Vue.config.productionTip = false
Vue.prototype.axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
