<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <v-container>
      <card-item></card-item>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import CardItem from '../components/CardItem.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    CardItem,
  },
}
</script>
