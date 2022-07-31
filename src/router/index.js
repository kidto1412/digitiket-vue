import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Onboarding',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Onboarding.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/ulasan',
    name: 'Masukkan Ulasan',
    component: () => import('../views/MasukkanUlasan.vue'),
  },
  {
    path: '/promo',
    name: 'Detail Promo',
    component: () => import('../views/DetailPromo.vue'),
  },
  {
    path: '/notification',
    name: 'Notification',
    component: () => import('../components/Notification.vue'),
  },
  {
    path: '/terkini',
    name: 'Promo Terkini',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/PromoTerkini.vue'),
  },
  {
    path: '/daftar',
    name: 'Daftar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Daftar.vue'),
  },
  {
    path: '/masuk',
    name: 'Masuk',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Masuk.vue'),
  },
  {
    path: '/akun',
    name: 'Akun',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Akun.vue'),
  },
  {
    path: '/ubah-profil',
    name: 'UbahProfil',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/UbahProfil.vue'),
  },
  {
    path: '/ubah-kata-sandi',
    name: 'UbahKataSandi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/UbahKataSandi.vue'),
  },
  {
    path: '/pilih-tanggal',
    name: 'PilihTanggal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/PilihTanggal.vue'),
  },
  {
    path: '/pilih-tiket',
    name: 'PilihTiket',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/PilihTiket.vue'),
  },
  {
    path: '/konfirmasi-pemesanan',
    name: 'KonfirmasiPemesanan',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../views/KonfirmasiPemesanan.vue'
      ),
  },
  {
    path: '/metode-pembayaran',
    name: 'MetodePembayaran',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/MetodePembayaran.vue'),
  },
  {
    path: '/pembayaran',
    name: 'Pembayaran',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Pembayaran.vue'),
  },
  {
    path: '/lokasi',
    name: 'Lokasi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Lokasi.vue'),
  },
  {
    path: '/detail-wisata',
    name: 'DetailWisata',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/DetailWisata.vue'),
  },
  {
    path: '/attraction',
    name: 'Attraction',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Attraction.vue'),
  },
  {
    path: '/event',
    name: 'Event',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Event.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
