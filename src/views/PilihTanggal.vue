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
export default {
  name: "PilihTanggal",
  data: () => ({
    // date: format(parseISO(new Date().toISOString()), "yyyy-MM-dd"),
    // date: format(
    //   new Date(
    //     Date.now() - new Date().getTimezoneOffset() * 60000
    //   ).toISOString(),
    //   "MM/dd/yyyy"
    // ),
    // date: moment().format(new Date().toISOString(), "yyyy-MM-dd"),
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    done: [false, false, false],
  }),
  // computed: {
  // computedDateFormattedMomentjs() {
  //   return this.date ? moment(this.date).format("dddd, MMMM Do YYYY") : "";
  // },
  //   computedDateFormattedDatefns() {
  //     return this.date ? format(parseISO(this.date), "EEEE, MMMM do yyyy") : "";
  //   },
  // },
  methods: {
    isDate(date) {
      // this.$set(this.done, 0, true);
      this.$router.push({ name: "PilihTiket", params: { item: date } });
      console.log(date);
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
