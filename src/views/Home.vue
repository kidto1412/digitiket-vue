<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <bottom-navigation />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import BottomNavigation from '../components/BottomNavigation.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    BottomNavigation,
  },
}
</script>
