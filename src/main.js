import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from './plugins/axios'
import VueAxios from 'vue-axios'
import './plugins/bootstrap-vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  VueAxios,
  render: (h) => h(App),
}).$mount('#app')
