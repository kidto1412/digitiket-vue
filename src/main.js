import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'
import axios from './plugins/axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  BootstrapVue,
  axios,
  VueAxios,
  render: (h) => h(App),
}).$mount('#app')
