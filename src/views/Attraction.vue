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
      <div class="d-flex align-center align-self-center">
        <v-text-field
          prepend-inner-icon="mdi-magnify"
          label="Cari Attraction ..."
          outlined
          class="align-self-center"
        ></v-text-field>
        <v-icon
          class="align-center align-self-center text-purple"
          size="40"
          style="position: relative; top: -10px;"
        >
          mdi-swap-vertical
        </v-icon>
      </div>
    </v-container>
    <v-container fluid>
      <list-view
        title="Taman Legenda Keong Mas"
        desc="Ciptakan Kemasan yang mampu menjual"
        price="35000"
        ulasan="17"
      />
    </v-container>
  </div>
</template>
<script>
import ListView from '../components/ListView.vue'
export default {
  components: { ListView },
  name: 'Attraction',
}
</script>
<style scoped>
.v-input__icon--prepend .v-icon {
  color: purple !important;
}
</style>
