<template>
  <div>
    <v-app-bar dark class="d-bg-purple" fixed>
      <v-btn icon dark @click.stop="$router.go(-1)">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <h3 class="mx-auto">Promo Terkini</h3>
      <v-spacer></v-spacer>
      <div></div>
    </v-app-bar>
    <v-container class="mt-15">
      <div v-for="i in promo" :key="i.id" class="mb-3">
        <v-card :to="'/detail-promo/' + i.id">
          <v-img :src="i.image_url" :lazy-src="i.image_url" class="img"></v-img>
        </v-card>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'PromoTerkini',
  data() {
    return {
      promo: [],
    }
  },
  created() {
    this.axios
      .get('/promo')
      .then((response) => {
        let { data } = response.data
        this.promo = data
      })
      .catch((error) => {
        let { responses } = error
        console.log(responses)
      })
  },
}
</script>
<style scoped>
.vrow {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  margin: -12px;
  align-content: space-between;
  justify-content: space-evenly;
}
.img {
  border-radius: 10px;
  object-fit: cover;
  width: 100%;
}
</style>
