<template>
  <nav style="z-index:2">
    <v-row align="center" justify="center">
      <v-col cols="11" sm="10" md="10" lg="9" xl="6">
        <v-toolbar flat>
          <v-toolbar-title><router-link to="/" v-on="on"><h2 style="color:#1fb6ff;">SmilesMap<v-icon class="pl-1" style="color:#1fb6ff;">mdi-map-marker</v-icon></h2></router-link></v-toolbar-title>
          <v-spacer></v-spacer>
          <div class="hidden-sm-and-down">
            <v-tooltip bottom v-for="link in links" :key="link.link" >
              <template v-slot:activator="{ on }">
                    <router-link :to="link.href" v-on="on" class="pl-3 text-subtitle-1">{{link.title}}</router-link>
              </template>
            </v-tooltip>
          </div>
        </v-toolbar>
      </v-col>
    </v-row>
  </nav>
</template>
<script>
  export default {
    data() {
      return {
        links: [
          {
            href: "/",
            title: "Home"
          },
          {
            href: "mapmaker",
            title: "Map Maker"
          },
          {
            href: "ourstory",
            title: "Our Story"
          },
          {
            href: "faq",
            title: "FAQ"
          },
          {
            href: "contactus",
            title: "Contact Us"
          }
        ]
      }
    }
  }
</script>
<style>
header {
  background-color: transparent !important;
}
a {
  color: black !important;
}
</style>