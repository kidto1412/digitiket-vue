<template>
  <div>
    <v-toolbar dark class="d-bg-purple">
      <v-btn icon dark @click.native="close">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-text-field
        autocomplete="off"
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
          <list-view :ticket="ticket" />
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
  methods: {
    doSearch() {
      let keyword = this.keyword;
      this.axios.get("/search?s=1&keyword=" + keyword).then((response) => {
        // let Ticketurl = [];
        let { data } = response.data;
        let { items } = data;
        let [{ url }] = items;
        this.ticketUrl = url;
      });
      if (keyword.length > 0) {
        this.axios.get(this.ticketUrl).then((response) => {
          let { data } = response.data;
          this.tickets = data;
          // console.log(response.data);
        });
      } else {
        this.tickets = [];
      }
      //   }},
      // doSearch() {
      //   let keyword = this.keyword;
      //   if (keyword.length > 0) {
      //     this.axios.get(`/search?s=1&keyword=+${keyword}`).then((response) => {
      //       let { data } = response.data;
      //       let { items } = data;
      //       this.filteredTickets = items;
      //     });
      //   } else {
      //     this.filteredTickets = [];
      //   }
    },
    hello() {
      alert("hello");
    },
    setState(keyword) {
      this.keyword = keyword;
    },
    close() {
      this.$emit("closed", false);
    },
    reset() {
      this.$refs.form.reset();
    },
  },
  created() {
    this.doSearch();
  },
};
</script>
