import axios from "axios";
export default {
  namespaced: true,
  state: {
    user: {},
    // token: null,
  },

  mutations: {
    set: (state, payload) => {
      state.user = payload;
    },
    setUser: (state, data) => {
      state.user = data;
    },
  },
  actions: {
    //   set data user yang login pada state user
    set: ({ commit }, payload) => {
      commit("set", payload);
    },

    fetchUser: ({ commit }) => {
      axios("https://digitiket.id/api/v1/get/user/user-profile", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt_token"),
        },
      }).then((response) => {
        let { data } = response.data;
        commit("setUser", data);
      });
    },
  },
  getters: {
    // getters user untuk mendapatkan data user pada state serta getters guest akan mengecek apakah ada data user atau tidak,  jika tidak berarti user tersebut belum login alias tamu.

    user: (state) => state.user,
    guest: (state) => Object.keys(state.user).length === 0,
    isLoggedIn: (state) => state.user !== 0,
  },
};
