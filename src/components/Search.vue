<template>
  <div>
    <v-toolbar dark class="d-bg-purple">
      <v-btn icon dark @click.native="close">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-text-field
        autocomplete="off"
        hide-details
        flat
        autofocus
        label="Cari..."
        v-model.trim="keyword"
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
          :value="tickets.length == 0 && keyword.length > 0 && tickets !== []"
          color="white"
        >
          <!-- Sorry, but no results were found. -->
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
// import func from "vue-editor-bridge";
import ListView from "./ListView.vue";
import { debounce } from "lodash";
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
  watch: {
    keyword() {
      if (!this.keyword) return this.debounceTicket();
    },
  },
  methods: {
    doSearch() {
      if (this.keyword.length > 0) {
        this.axios
          .get(`/search?s=1&keyword=${this.keyword}`)
          .then((response) => {
            if (response.data.success == true) {
              let { data } = response.data;
              let { items } = data;
              this.categories = items;
              items.map((item) => {
                this.axios.get(item.url).then((response) => {
                  console.log(response.data.success);
                  if (response.data.success === false) {
                    this.tickets = [];
                  } else {
                    let { data } = response.data;
                    this.tickets = data;
                  }
                });
              });
            } else {
              this.categories = [];
            }

            //   if (this.categories > 0) {
            //     this.axios
            //       .get(items.url + this.categories.id)
            //       .then((response) => {
            //         let { data } = response.data;
            //         this.tickets = data;
            //       });
            //   }
          });
      }

      // let keyword = this.keyword;
      // if (this.keyword.length > 0) {
      //   this.axios
      //     .get(`/search?s=1&keyword=${this.keyword}`)
      //     .then((response) => {
      //       let { data } = response.data;
      //       let { items } = data;
      //       this.categories = items;
      //       items.map((item) => {
      //         this.axios.get(item.url + this.categories.id).then((response) => {
      //           let { data } = response.data;
      //           console.log(data);
      //           this.tickets = data;
      //         });
      //       });
      //     });
      // }
    },
    filteredTicket() {},
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
    this.debounceTicket = debounce(this.doSearch, 1000);
  },
};
</script>
