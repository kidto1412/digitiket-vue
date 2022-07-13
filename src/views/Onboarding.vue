<template>
  <div>
    <splash-screen />
    <v-img src="../../public/img/onboarding.png"></v-img>
    <v-container>
      <v-img src="../../public/img/logo2.png" width="130" class="my-5"></v-img>
      <p class="mb-15">
        Cari dan pesan tiket wahana rekreasi, Booking promo tiket wahana
        rekreasi lebih praktis hanya di DigiTiket , virtual tour indonesia,
        wisata virtual indonesia.
      </p>
      <div class="d-flex justify-space-between">
        <v-btn class="btn-purple" color="white--text" style="z-index: 1;">
          Masuk
        </v-btn>
        <v-btn class="outlined-purple" outlined>Daftar</v-btn>
      </div>
    </v-container>
    <v-img
      src="../../public/img/circle-pink.svg"
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
.pink-circle {
  position: absolute;
  bottom: 0;
}
</style>
