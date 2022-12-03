export default {
  namespaced: true,
  state: {
    orderEvent: {},
  },

  mutations: {
    // mengubah state Ordervent dengan data yg baru
    order: (state, payload) => {
      state.orderEvent = payload;
    },
  },
  actions: {
    //    memanggil mutation untuk di panggil di method setOrde untuk merubah state
    setOrder: ({ commit }, payload) => {
      commit("order", payload);
    },
  },

  getters: {
    event: (state) => state.orderEvent,
  },
};

// export default {
//     namespaced: true,
//     state: {
//       orderEvent: {},
//     },

//     mutations: {
//       insert: (state, payload) => {
//         state.orderEvent.push({
//           id: payload.id,
//           tanggal_datang: payload.tanggal_datang,
//         });
//       },
//     },
//     actions: {
//       // mendeteksi apakah data yang diinput ada pada carts?
//       add: ({ state, commit }, payload) => {
//         let eventItem = state.orderEvent.find((item) => item.id === payload.id);
//         // jika tidak ada maka mutation insert dijalankan
//         if (!eventItem) {
//           commit("insert", payload);
//         }
//       },
//     },

//     getters: {
//       events: (state) => state.orderEvent,
//     },
//   };
