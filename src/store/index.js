import Vue from "vue";
import Vuex from "vuex";
import dialog from "@/stores/dialog";
import auth from "@/stores/auth";
import alert from "@/stores/alert";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    prevUrl: "",
  },
  mutations: {
    setPrevUrl: (state, value) => {
      state.prevUrl = value;
    },
  },
  actions: {
    setPrevUrl: ({ commit }, value) => {
      commit("setPrevUrl", value);
    },
  },
  getters: {
    prevUrl: (state) => state.prevUrl,
  },
  modules: {
    dialog,
    auth,
    alert,
  },
});
