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
    <v-date-picker
      no-title
      v-model="date"
      @click:date="isDate"
      full-width
    ></v-date-picker>
  </div>
</template>
<script>
// import moment from "moment";
// import { format, parseISO } from "date-fns";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "PilihTanggal",
  data: () => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    done: [false, false, false],
  }),
  computed: {
    ...mapGetters({
      arrivalDate: "order/arrivalDate",
    }),
  },
  methods: {
    ...mapActions({
      setArrivalDate: "order/setArrivalDate",
    }),
    isDate(date) {
      this.setArrivalDate(date);
      console.log(this.setArrivalDate);
      this.$router.push({ name: "PilihTiket" });
      // alert(`You have just double clicked the following date: ${date}`);
    },
  },
};
</script>

<style>
/* .v-date-picker-header {
  display: none !important;
} */
</style>
