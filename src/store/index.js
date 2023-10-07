import Vue from "vue";
import Vuex from "vuex";
import dialog from "@/stores/dialog";
import auth from "@/stores/auth";
import alert from "@/stores/alert";
import order from "@/stores/order";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    prevUrl: "",
    event: {},
    arrival_date: "",
  },
  mutations: {
    setPrevUrl: (state, value) => {
      state.prevUrl = value;
    },
    setEvent: (state, payload) => {
      state.event = payload;
    },
    setArrivalDate: (state, payload) => {
      state.arrival_date = payload;
    },
  },
  actions: {
    setPrevUrl: ({ commit }, value) => {
      commit("setPrevUrl", value);
    },
    setEvent: ({ commit }, payload) => {
      commit("setEvent", payload);
    },
    setArrivalDate: ({ commit }, payload) => {
      commit("setArrivalDate", payload);
    },
  },
  getters: {
    prevUrl: (state) => state.prevUrl,
    event: (state) => state.event,
    arrivalDate: (state) => state.arrival_date,
  },
  modules: {
    dialog,
    auth,
    alert,
    order,
  },
});
