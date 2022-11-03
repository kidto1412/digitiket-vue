<template>
  <div>
    <v-card class="ma-1 mb-3 card" v-for="n in 5" :key="n"> </v-card>
  </div>
</template>
<script>
export default {
  name: "PromoSkeleton",
};
</script>

<style scoped>
.card {
  width: 100%;
  height: 100px;
  background-color: #eee;
}
</style>