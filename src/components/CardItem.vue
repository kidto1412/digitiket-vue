<template v-for>
  <v-card class="card-shadow card-radius" style="width: 15rem;">
    <v-img
      :src="rekomendasi.image"
      :img-alt="judul"
      class="card-image card-image-top"
      aspect-ratio="1.7"
    ></v-img>

    <v-card-title>
      {{ rekomendasi.title }}
    </v-card-title>

    <!-- <v-card-text> -->
    <div class="d-flex ml-2">
      <v-icon>mdi-map-marker</v-icon>
      <div class="text-subtitle-1">
        {{ rekomendasi.venue }}
      </div>
    </div>

    <div class="d-flex justify-space-between align-center mx-4">
      <div class="my-4 text-subtitle-1 price purple--text">
        IDR {{ converter(harga) }}
      </div>

      <v-rating
        :value="rekomendasi.specialrate"
        color="amber"
        dense
        half-increments
        readonly
        size="14"
      ></v-rating>
    </div>
  </v-card>
</template>
<script>
export default {
  name: 'CardItem',
  // ['rekomendasi', 'populer', 'baru'],
  props: {
    rekomendasi: {
      type: Object,
      default: () => [],
    },
    populer: {
      type: Object,
      default: () => [],
    },

    terbaru: {
      type: Object,
      default: () => [],
    },
  },
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
  border-radius: 10px;
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
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
}

.price {
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
}

.card-img,
.card-img-top {
  border-top-left-radius: 18px !important;
  border-top-right-radius: 18px !important;
  object-fit: cover !important;
}
.card-shadow {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
}
</style>
