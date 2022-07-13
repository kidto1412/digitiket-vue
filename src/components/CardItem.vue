<template>
  <v-card class="card-shadow card-radius" style="max-width: 20rem;">
    <v-img
      :src="url_gambar"
      :img-alt="judul"
      class="card-image card-image-top"
      aspect-ratio="1.7"
    ></v-img>

    <v-card-title>{{ judul }}</v-card-title>

    <v-card-text>
      <div class="d-flex align-content-center">
        <v-icon>mdi-map-marker</v-icon>
        {{ lokasi }}
      </div>

      <div class="d-flex justify-space-between align-center">
        <div class="my-4 text-subtitle-1 purple--text">
          IDR {{ converter(harga) }}
        </div>

        <v-rating
          :value="score"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: 'CardItem',
  data() {
    return {
      judul: 'Virtual Tour Candi Prambanan',
      lokasi: 'Sleman, Yogyakarta',
      url_gambar: 'https://imgur.com/w1239.jpg',
      harga: 35000,
      score: 3.9,
    }
  },
  methods: {
    converter(nominal) {
      const currency = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
      })
      return currency.format(nominal).slice(3)
    },
  },
}
</script>

<style scoped>
.card-radius {
  border-radius: 18px;
}
/* .v-image {
  background-repeat: no-repeat;
  height: 200px !important;
  border-top-left-radius: 18px !important;
  border-top-right-radius: 18px !important;
  object-fit: cover !important;
  background-size: cover !important;
} */
.v-card__title {
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
}
.card-img,
.card-img-top {
  border-top-left-radius: 18px !important;
  border-top-right-radius: 18px !important;
  object-fit: cover !important;
}
.card-shadow {
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.1) !important;
}
</style>
