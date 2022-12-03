import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Onboarding",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Onboarding.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/ulasan",
    name: "Masukkan Ulasan",
    component: () => import("../views/MasukkanUlasan.vue"),
  },
  {
    path: "/promo",
    name: "Detail Promo",
    component: () => import("../views/DetailPromo.vue"),
  },
  {
    path: "/notification",
    name: "Notification",
    component: () => import("../components/Notification.vue"),
  },
  {
    path: "/promo-terkini",
    name: "Promo Terkini",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PromoTerkini.vue"),
  },
  {
    path: "/daftar",
    name: "Daftar",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Daftar.vue"),
  },
  {
    path: "/masuk",
    name: "Masuk",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Masuk.vue"),
  },
  {
    path: "/akun",
    name: "Akun",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Akun.vue"),
  },
  {
    path: "/ubah-profil/:id",
    name: "ubahprofil",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/UbahProfil.vue"),
    props: true,
  },
  {
    path: "/ubah-kata-sandi",
    name: "UbahKataSandi",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/UbahKataSandi.vue"),
  },
  {
    path: "/pilih-tanggal",
    name: "PilihTanggal",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PilihTanggal.vue"),
  },
  {
    path: "/pilih-tiket",
    name: "PilihTiket",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PilihTiket.vue"),
    props: true,
    // meta: { auth: true },
  },
  {
    path: "/konfirmasi-pemesanan",
    name: "KonfirmasiPemesanan",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/KonfirmasiPemesanan.vue"
      ),
    meta: { auth: true },
  },
  {
    path: "/metode-pembayaran",
    name: "MetodePembayaran",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MetodePembayaran.vue"),
  },
  {
    path: "/pembayaran",
    name: "Pembayaran",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Pembayaran.vue"),
  },
  {
    path: "/lokasi",
    name: "Lokasi",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Lokasi.vue"),
  },
  {
    path: "/detail-wisata/:slug",
    name: "DetailWisata",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DetailWisata.vue"),
  },
  {
    path: "/attraction",
    name: "Attraction",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Attraction.vue"),
  },
  {
    path: "/event",
    name: "Event",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Event.vue"),
  },
  {
    path: "/tour",
    name: "Tour",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Tour.vue"),
  },
  {
    path: "/virtual-tour",
    name: "VirtualTour",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/VirtualTour.vue"),
  },
  {
    path: "/tickets",
    name: "Tickets",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Tickets.vue"),
  },
  {
    path: "/detail-promo/:id",
    name: "DetailPromo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DetailPromo.vue"),
  },
  {
    path: "/tiket",
    name: "Ticket",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Ticket.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
// tambahkan ini untuk melakukan pengecekan pada setiap routing
router.beforeEach((to, from, next) => {
  // jika routing ada meta auth-nya maka
  if (to.matched.some((record) => record.meta.auth)) {
    // jika user adalah guest
    if (store.getters["auth/guest"]) {
      // tampilkan pesan bahwa harus login dulu
      store.dispatch("alert/set", {
        status: true,
        text: "Login first",
        color: "error",
      });
      // tampilkan form login
      store.dispatch("setPrevUrl", to.path);
      router.push("/masuk");
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
