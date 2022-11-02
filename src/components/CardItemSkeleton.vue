<template>
  <v-card class="card-shadow card-radius">
    <v-img
      class="card-image card-image-top ticket-image mb-5"
      aspect-ratio="1.7"
    ></v-img>

    <p class="card-title ml-4"></p>

    <!-- <v-card-text> -->
    <div class="d-flex ml-2">
      <!-- <v-icon>mdi-map-marker</v-icon> -->
      <div class="text-subtitle-1 ml-2 mt-3"></div>
    </div>

    <div class="d-flex justify-space-between align-center mx-4">
      <div class="my-4 text-subtitle-1 price purple--text"></div>

      <p class="mt-4"></p>
    </div>
  </v-card>
</template>
<script>
export default {
  name: "CardItemSkeleton",
  // ['rekomendasi', 'populer', 'baru'],

  data() {
    return {};
  },
};
</script>

<style scoped>
.card-radius {
  border-radius: 10px;
}
.v-card {
  background-color: #eee !important;
  width: 15rem;
}
.ticket-image {
  width: 100%;
  height: 100px;
  background-color: #d8d8d8 !important;
  margin: 0 auto;
}
/* .v-card__title {
  background-color: #d8d8d8 !important;
  width: 120px;
  height: 9px;
} */
.card-title {
  background-color: #d8d8d8 !important;
  width: 120px;
  height: 9px;
}
.text-subtitle-1 {
  background-color: #d8d8d8 !important;
  width: 180px;
  height: 9px;
}

.price {
  width: 100px;
  height: 14px;
  background-color: #d8d8d8;
}
p {
  width: 100px;
  height: 14px;
  background-color: #d8d8d8;
}
.card-img,
.card-img-top {
  border-top-left-radius: 18px !important;
  border-top-right-radius: 18px !important;
  object-fit: cover !important;
  width: 300px;
  height: 100;
  background-color: #eee !important;
}
.card-shadow {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
}
</style>
