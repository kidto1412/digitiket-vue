import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "./plugins/axios";
import VueAxios from "vue-axios";
import vuetify from "./plugins/vuetify";
import "./plugins/helper";
import "./assets/style.css";
import "leaflet/dist/leaflet.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  axios,
  VueAxios,
  vuetify,

  render: (h) => h(App),
}).$mount("#app");
