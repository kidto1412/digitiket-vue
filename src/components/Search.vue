<template>
  <div>
    <v-toolbar dark class="d-bg-purple">
      <v-btn icon dark @click.native="close">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-text-field
        hide-details
        clearable
        flat
        autofocus
        label="Cari..."
        v-model="keyword"
        @input="doSearch"
        background-color="white"
        light
        class="rounded"
      ></v-text-field>
    </v-toolbar>
    <v-card>
      <v-card-text>
        <v-subheader v-if="keyword.length > 0">
          Hasil Pencarian: "{{ keyword }}"
        </v-subheader>
        <v-alert
          :value="tickets.length == 0 && keyword.length > 0"
          color="warning"
        >
          Sorry, but no results were found.
        </v-alert>
        <!-- Hasil pencarian ditampilkan di sini -->

        <div v-for="ticket in tickets" :key="ticket.id">
          <!-- <book-item :book="book" /> -->
          <list-view :ticket="ticket" />
          <!-- <li>{{ticket.title}}</li> -->
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import ListView from "./ListView.vue";
export default {
  components: { ListView },
  name: "search",
  data() {
    return {
      categories: [],
      tickets: [],
      keyword: "",
      ticketUrl: "",
    };
  },
  // computed: {
  //   filterTicket: function () {
  //     return this.tickets.filter((tk)=>{
  //       return
  //     })
  // // },
  // mounted() {
  //   this.doSearch();
  // },
  computed() {
    this.tickets;
    this.ticketUrl;
  },
  // created() {
  //   return keywprd
  // },
  methods: {
    doSearch() {
      // let keyword = this.keyword;
      this.axios
        .post("/search?s=1&keyword=" + this.keyword)
        .then((response) => {
          // let Ticketurl = [];
          let { data } = response.data;
          let { items } = data;
          let [{ url }] = items;
          this.ticketUrl = url;
        });
      if (this.keyword.length > 0) {
        this.axios.get(this.ticketUrl).then((response) => {
          let { data } = response.data;
          this.tickets = data;
          console.log(response.data);
        });
      } else if (this.keyword.length === 0) {
        // this.keyword = "";
        // this.ticketUrl = "";
        this.tickets = [];
      }
    },
    close() {
      this.$emit("closed", false);
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
