<template>
  <div class="image-container" v-if="show">
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
  data() {
    return {
      show: true,
    }
  },
  mounted() {
    this.showToggle()
  },
  methods: {
    showToggle() {
      setTimeout(() => {
        this.show = false
      }, 2000)
    },
  },
}
</script>

<style scoped>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
