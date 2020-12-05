<template>
  <v-app style="background-color: transparent !important;">
      <Navbar/>
    <v-content>
      <router-view style="height: 100%"></router-view>
    </v-content>
      <BottomNavbar/>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import BottomNavbar from '@/components/BottomNavbar.vue'

export default {
  name: 'App',
  components: { Navbar, BottomNavbar },
  data: () => ({
    //
  }),
};
</script>

<style>
html, 
body {
    overflow-x: hidden;
}
</style>