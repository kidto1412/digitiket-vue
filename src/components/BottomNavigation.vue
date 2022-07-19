<template>
  <v-bottom-navigation :value="value" class="text-purple">
    <v-btn>
      <span>Beranda</span>

      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn>
      <span>Lokasi</span>
      <v-icon>mdi-map-marker</v-icon>
    </v-btn>

    <v-btn>
      <span>Tiket</span>
      <v-icon>mdi-ticket-confirmation</v-icon>
    </v-btn>

    <v-btn>
      <span>Akun</span>

      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  name: 'BottomNavigation',
  data: () => ({ value: 0 }),
}
</script>
<style scoped>
.v-item-group.v-bottom-navigation {
  position: fixed;
}
</style>
