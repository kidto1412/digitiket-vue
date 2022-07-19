<template>
  <div>
    <splash-screen />
    <a href="/home" class="btn-skip mx-5 mt-5">
      Skip
    </a>
    <v-img src="../assets/img/onboarding.png"></v-img>

    <v-container>
      <v-img src="../assets/img/logo2.png" width="130" class="my-5"></v-img>
      <p class="mb-15">
        Cari dan pesan tiket wahana rekreasi, Booking promo tiket wahana
        rekreasi lebih praktis hanya di DigiTiket , virtual tour indonesia,
        wisata virtual indonesia.
      </p>
      <div class="d-flex justify-space-between">
        <v-btn
          class="btn-purple"
          color="white--text"
          style="z-index: 1;"
          to="/masuk"
        >
          Masuk
        </v-btn>
        <v-btn class="outlined-purple" outlined to="/daftar">Daftar</v-btn>
      </div>
    </v-container>
    <v-img
      src="../assets/img/circle-pink.svg"
      class="pink-circle"
      width="100"
    ></v-img>
  </div>
</template>

<script>
import SplashScreen from './SplashScreen.vue'
export default {
  components: { SplashScreen },
  name: 'Onboarding',
}
</script>

<style scoped>
.btn-skip {
  position: absolute;
  z-index: 1;
  right: 0;
  color: white;
  text-decoration: none;
}
.pink-circle {
  position: absolute;
  bottom: 0;
}
</style>
