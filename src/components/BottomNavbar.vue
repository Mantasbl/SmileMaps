<template>
  <v-footer color="#1fb6ff" class="py-5 mt-6">
    <v-row justify="center" no-gutters>
      <v-tooltip bottom v-for="link in links" :key="link.link">
        <template v-slot:activator="{ on }">
          <router-link
            :to="link.href"
            v-on="on"
            class="pl-3 text-subtitle-1"
            >{{ link.title }}</router-link
          >
        </template>
      </v-tooltip>
    </v-row>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    links: [
      {
        href: "/",
        title: "Home",
      },
      {
        href: "mapmaker",
        title: "Map Maker",
      },
      {
        href: "ourstory",
        title: "Our Story",
      },
      {
        href: "faq",
        title: "FAQ",
      },
      {
        href: "contactus",
        title: "Contact Us",
      },
    ],
  }),
};
</script>