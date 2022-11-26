<template>
  <v-bottom-navigation :value="value" class="text-purple">
    <v-btn to="/home">
      <span>Beranda</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn to="/lokasi">
      <span>Lokasi</span>
      <v-icon>mdi-map-marker</v-icon>
    </v-btn>

    <v-btn to="/tiket">
      <span>Tiket</span>
      <v-icon>mdi-ticket-confirmation</v-icon>
    </v-btn>

    <v-btn to="/akun">
      <span>Akun</span>

      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  name: "BottomNavigation",
  data: () => ({ value: 0 }),
};
</script>
<style scoped>
.v-item-group.v-bottom-navigation {
  position: fixed;
}
</style>
