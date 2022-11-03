<template>
  <div>
    <v-app-bar dark class="d-bg-purple" fixed>
      <v-btn icon dark @click.stop="$router.go(-1)">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <h3 class="mx-auto">Event</h3>
      <v-spacer></v-spacer>
      <div></div>
    </v-app-bar>
    <v-container class="mt-16">
      <div class="d-flex align-center align-self-center">
        <v-text-field
          prepend-inner-icon="mdi-magnify"
          label="Cari Event ..."
          outlined
          class="align-self-center"
        ></v-text-field>
        <v-icon
          class="align-center align-self-center text-purple"
          size="40"
          style="position: relative; top: -10px"
        >
          mdi-swap-vertical
        </v-icon>
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
export default {
  components: { ListView },
  name: "Event",
  data() {
    return {
      loading: false,
      items: [],
    };
  },
  created() {
    this.loading = false;
    this.axios
      .get("/event")
      .then((response) => {
        console.log(response.data);
        let { data } = response.data;
        this.items = data;
        this.loading = !false;
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
