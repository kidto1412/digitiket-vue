import Vue from 'vue'
import Vuex from 'vuex'
import dialog from '@/stores/dialog'
import auth from '@/stores/auth'
import alert from '@/stores/alert'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    dialog,
    auth,
    alert,
  },
})
