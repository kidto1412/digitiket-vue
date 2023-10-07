// export default {
//     namespaced: true,
//     state: {
//       event: {},
//       orderEvent: {},
//       arrival_date: "",
//     },

//     mutations: {
//       // mengubah state Ordervent dengan data yg baru
//       setOrder: (state, payload) => {
//         state.orderEvent = payload;
//       },
//       setEvent: (state, payload) => {
//         state.event = payload;
//       },
//       setArrivalDate: (state, payload) => {
//         state.arrival_date = payload;
//       },
//     },
//     actions: {
//       //    memanggil mutation untuk di panggil di method setOrde untuk merubah state
//       setOrder: ({ commit }, payload) => {
//         commit("setOrder", payload);
//       },
//       setEvent: ({ commit }, payload) => {
//         commit("setEvent", payload);
//       },
//       setArrivalDate: ({ commit }, payload) => {
//         commit("setArrivalDate", payload);
//       },
//     },

//     getters: {
//       event: (state) => state.event,
//       orderEvent: (state) => state.orderEvent,
//       arrivalDate: (state) => state.arrival_date,
//     },
//   };
//   // export default {
//   //   namespaced: true,
//   //   state: {
//   //     orders: [],
//   //     event: {},
//   //     arrival_date: "",
//   //   },

//   //   mutations: {
//   //     insert: (state, payload) => {
//   //       state.orders.push({
//   //         id: payload.id,
//   //         id_event: state.event.id_event,
//   //         title: state.event.title,
//   //         ticket_name: payload.ticket_name,
//   //         price: payload.price,
//   //         qty: payload.qty,
//   //       });
//   //     },
//   //     update: (state, payload) => {
//   //       let idx = state.orders.indexOf(payload);
//   //       state.orders.splice(idx, 1, {
//   //         id: payload.id,
//   //         id_event: state.event.id_event,
//   //         title: state.event.title,
//   //         ticket_name: payload.ticket_name,
//   //         price: payload.price,
//   //         qty: payload.qty,
//   //       });
//   //       if (payload.quantity <= 0) {
//   //         state.orders.splice(idx, 1);
//   //       }
//   //     },
//   // setEvent: (state, payload) => {
//   //   state.event = payload;
//   // },
//   //     setArrivalDate: (state, payload) => {
//   //       state.arrival_date = payload;
//   //     },
//   //     set: (state, payload) => {
//   //       state.orders = payload;
//   //     },
//   //   },
//   //   actions: {
//   //     // mendeteksi apakah data yang diinput ada pada orders?
//   //     add: ({ state, commit }, payload) => {
//   //       let orderItem = state.orders.find((item) => item.id === payload.id);
//   //       // jika tidak ada maka mutation insert dijalankan
//   //       if (!orderItem) {
//   //         commit("insert", payload);
//   //       }
//   //       // jika ada maka mutation update dijalankan
//   //       else {
//   //         orderItem.quantity++;
//   //         commit("update", orderItem);
//   //       }
//   //     },
//   //     remove: ({ state, commit }, payload) => {
//   //       let orderItem = state.orders.find((item) => item.id === payload.id);
//   //       if (orderItem) {
//   //         orderItem.quantity--;
//   //         commit("update", orderItem);
//   //       }
//   //     },
//   //     setEvent: ({ commit }, payload) => {
//   //       commit("setEvent", payload);
//   //     },
//   //     setArrivalDate: ({ commit }, payload) => {
//   //       commit("setArrivalDate", payload);
//   //     },
//   //     set: (state, payload) => {
//   //       state.orders = payload;
//   //     },
//   //   },

//   //   getters: {
//   //     event: (state) => state.event,
//   //     arrivalDate: (state) => state.arrival_date,
//   //     orders: (state) => state.orders,
//   //     count: (state) => {
//   //       return state.orders.length;
//   //     },
//   //     totalPrice: (state) => {
//   //       let total = 0;
//   //       state.orders.forEach(function (qty) {
//   //         total += qty.price * qty.quantity;
//   //       });
//   //       return total;
//   //     },
//   //     totalQuantity: (state) => {
//   //       let total = 0;
//   //       state.orders.forEach(function (qty) {
//   //         total += qty.qty;
//   //       });
//   //       return total;
//   //     },
//   //     totalWeight: (state) => {
//   //       let total = 0;
//   //       state.orders.forEach(function (qty) {
//   //         total += qty.weight;
//   //       });
//   //       return total;
//   //     },
//   //   },
//   // };
