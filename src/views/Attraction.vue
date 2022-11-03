<template>
  <div>
    <v-app-bar dark class="d-bg-purple" fixed>
      <v-btn icon dark @click.stop="$router.go(-1)">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <h3 class="mx-auto">Attraction</h3>
      <v-spacer></v-spacer>
      <div></div>
    </v-app-bar>
    <v-container class="mt-16">
      <div v-if="loading">
        <lisv-view-skeleton />
      </div>

      <div class="d-flex align-center align-self-center">
        <v-text-field
          prepend-inner-icon="mdi-magnify"
          label="Cari Attraction ..."
          outlined
          class="align-self-center"
          v-model.trim="keyword"
          @input="doSearch"
        ></v-text-field>
        <v-icon
          class="align-center align-self-center text-purple"
          size="40"
          style="position: relative; top: -10px"
        >
          mdi-swap-vertical
        </v-icon>
        <v-card>
          <v-card-text>
            <v-subheader v-if="keyword.length > 0">
              Hasil Pencarian: "{{ keyword }}"
            </v-subheader>
            <v-alert
              :value="tickets.length == 0 && keyword.length > 0"
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
    </v-container>
    <v-container fluid>
      <div v-for="item in items" :key="`item-` + item.id">
        <list-view :ticket="item" />
      </div>
    </v-container>
  </div>
</template>
<script>
import ListView from "../components/ListView.vue";
import LisvViewSkeleton from "../components/LisvViewSkeleton.vue";
export default {
  components: { ListView, LisvViewSkeleton },
  name: "Attraction",
  data() {
    return {
      items: [],
      tickets: [],
      keyword: "",
      loading: false,
    };
  },
  methods: {
    doSearch() {
      // let keyword = this.keyword;
      if (this.keyword.length > 0) {
        this.axios
          .get(`/search?s=1&keyword=${this.keyword}`)
          .then((response) => {
            let { data } = response.data;
            this.tickets = data;
            this.loading = !false;
          });
      }
    },
  },
  created() {
    this.loading = !false;
    this.axios
      .get("/attraction")
      .then((response) => {
        console.log(response.data);
        let { data } = response.data;
        this.items = data;
        this.loading = false;
      })
      .catch((error) => {
        let { responses } = error;
        console.log(responses);
      });
  },
};
</script>
<style scoped>
.v-input__icon--prepend .v-icon {
  color: purple !important;
}
</style>
