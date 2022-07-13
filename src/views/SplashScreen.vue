<template>
  <div class="image-container">
    <v-img
      class="logo"
      src="../../public/img/logo-digitiket.png"
      style="max-width: 150px;"
    ></v-img>
  </div>
</template>
<script>
export default {
  name: 'Splashscreen',
}
</script>

<style scoped>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
