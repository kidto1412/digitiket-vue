<template>
  <div>
    <v-app-bar dark class="d-bg-purple" fixed>
      <v-btn icon dark @click.stop="$router.go(-1)">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <h3 class="mx-auto">Tour</h3>
      <v-spacer></v-spacer>
      <div></div>
    </v-app-bar>
    <v-container class="mt-16">
      <div class="d-flex align-center align-self-center">
        <v-text-field
          prepend-inner-icon="mdi-magnify"
          label="Cari Tour ..."
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
    <v-container fluid v-for="item in items" :key="`item-` + item.id">
      <div>
        <list-view :ticket="item" />
      </div>
    </v-container>
  </div>
</template>
<script>
import ListView from "../components/ListView.vue";
export default {
  components: { ListView },
  name: "Tour",
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.axios
      .get("/tour")
      .then((response) => {
        console.log(response.data);
        let { data } = response.data;
        this.items = data;
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
