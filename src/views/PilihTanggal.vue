<template>
  <div>
    <v-app-bar dark class="d-bg-purple" fixed>
      <v-btn icon dark @click.stop="$router.go(-1)">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <h3 class="mx-auto">Tanggal Kedatangan</h3>
    </v-app-bar>
    <v-container class="mt-15">
      <h5>Silahkan pilih tanggal kedatangan anda</h5>
    </v-container>
    <v-date-picker no-title v-model="date" full-width></v-date-picker>
  </div>
</template>
<script>
export default {
  name: 'PilihTanggal',
  data: () => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
  }),
  methods:{
    handleSendDate(){
      this.date
    }
  }
}
</script>

<style>
.v-date-picker-header {
  display: none !important;
}
</style>
