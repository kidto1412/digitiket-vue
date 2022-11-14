<template>
  <div>
    <v-card
      class="overflow-hidden d-flex justify-space-between card-radius card mb-2"
      to=""
      v-for="n in 5"
      :key="n"
    >
      <v-row align="center" no-gutters>
        <v-col cols="6">
          <v-img class="card-img"></v-img>
        </v-col>
        <v-col cols="5" class="ml-1">
          <v-card-title class="text-title ml-3 mb-5"> </v-card-title>
          <v-card-subtitle class="text-desc mt-1 ml-3" style="">
          </v-card-subtitle>
          <v-card-subtitle class="text-price ml-3"> </v-card-subtitle>
          <div class="d-flex align-center ml-3">
            <div class="text-ulasan mt-1"></div>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<style scoped>
@media screen and (max-width: 576px) {
  .v-card {
    max-width: 540px;
  }
  .card-img {
    position: relative;
    /* top: 10%; */
    /* left: 5%; */

    border-radius: 20px 20px 20px 20px;
    padding: 10px 0px 10px 10px;
    margin: 10px;
    width: 210px;
    height: 130px;
    background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 0) 80%
      ),
      lightgray;
    background-repeat: repeat-y;
    background-size: 50px 500px;
    background-position: 0 0;
    animation: shine 1s infinite;
    display: block;
  }
}
.card {
  background-color: #eee;
}

.card-img {
  position: relative;
  /* top: 10%; */
  /* left: 5%; */
  border-radius: 20px 20px 20px 20px;
  padding: 10px 0px 10px 10px;
  margin: 10px;
  width: 210px;
  height: 130px;
}

.text-title {
  width: 100px;
  height: 14px;
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 80%
    ),
    lightgray;
  background-repeat: repeat-y;
  background-size: 50px 500px;
  background-position: 0 0;
  animation: shine 1s infinite;
  display: block;
}
.text-desc {
  width: 100px;
  height: 14px;
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 80%
    ),
    lightgray;
  background-repeat: repeat-y;
  background-size: 50px 500px;
  background-position: 0 0;
  animation: shine 1s infinite;
  display: block;
  position: relative;
  top: -10px;
}

.text-price {
  width: 100px;
  height: 14px;
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 80%
    ),
    lightgray;
  background-repeat: repeat-y;
  background-size: 50px 500px;
  background-position: 0 0;
  animation: shine 1s infinite;
  display: block;
}
.text-ulasan {
  width: 100px;
  height: 14px;
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 80%
    ),
    lightgray;
  background-repeat: repeat-y;
  background-size: 50px 500px;
  background-position: 0 0;
  animation: shine 1s infinite;
  display: block;
}

.card-radius {
  border-radius: 10px;
}
@keyframes shine {
  to {
    background-position: 100% 0;
  }
}
</style>

<script>
export default {
  name: "ListViewSkeleton",
};
</script>