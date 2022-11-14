<template>
  <div>
    <v-card class="card"> </v-card>
  </div>
</template>
<script>
export default {
  name: "PromoSkeleton",
};
</script>

<style scoped>
.card:empty {
  width: 100%;
  height: 100px;
  display: block;
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
}
@keyframes shine {
  to {
    background-position: 100% 0;
  }
}
</style>