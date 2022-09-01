<template>
  <div>
    <v-app-bar dark class="d-bg-purple" fixed>
      <v-btn icon dark @click.stop="$router.go(-1)">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <h3 class="mx-auto">Tickets</h3>
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
      <div v-for="ticket in tickets" :key="`ticket-` + ticket.id">
        <list-view :ticket="ticket" class="mb-2" />
      </div>
    </v-container>
  </div>
</template>
<script>
import ListView from '../components/ListView.vue'

export default {
  components: { ListView },
  name: 'Tickets',
  data() {
    return {
      tickets: [],
    }
  },
  created() {
    this.axios.get('/cardInfo?status=all').then((response) => {
      let { data } = response.data
      this.tickets = data
    })
  },
}
</script>
<style scoped>
.v-input__icon--prepend .v-icon {
  color: purple !important;
}
</style>
