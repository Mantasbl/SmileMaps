<template>
  <div class="home" id="home">
    <div
      id="homebg"
      style="position: absolute; max-width: 30vw; right: 0px; top: 5vh"
    >
      <img src="../../public/img/bg.png" />
    </div>
    <div
      id="homeMap"
      style="position: absolute; max-width: 30vw; right: 0px; top: 5vh"
    >
      <img src="../../public/img/1.png" />
    </div>
    <v-row
      align="center"
      justify="center"
      class="py-md-6 px-5 introduction-row"
    >
      <div
        class="introduction px-3"
        align="center"
        justify="center"
        style="width: 100%"
      >
        <div class="display-2 pb-3 pb-md-12">
          <p>
            <span class="introduction-title">Welcome to SmilesMap</span><br />
            <span class="introduction-content">
              <span>Your custom Map Editor For</span>
              <span id="homeloop"> Germany</span>
            </span>
          </p>
        </div>
      </div>
    </v-row>
    <v-row align="center" justify="center" class="skills">
      <v-col cols="10" md="10" lg="9" xl="6">
        <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
          <v-timeline-item
            v-for="(item, i) in items"
            :key="i"
            :color="item.color"
            :icon="item.icon"
            fill-dot
          >
            <v-card :color="item.color" dark>
              <v-card-title class="title">{{ item.title }}</v-card-title>
              <v-card-text class="p-0 m-0">
                <v-img
                  contain
                  src="../assets/player.png"
                ></v-img>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: "#1fb6ff",
        icon: "mdi-file",
        title: "Step 1 - Upload desired image",
        desc: "",
      },
      {
        color: "#1fb6ff",
        icon: "mdi-crop",
        title: "Step 2 - Drag and Rotate image",
        desc: "",
      },
      {
        color: "#1fb6ff",
        icon: "mdi-content-save",
        title: "Step 3 - Save Image",
        desc: "",
      },
      {
        color: "#1fb6ff",
        icon: "mdi-printer",
        title: "Step 4 - Print out downloaded image",
        desc: "",
      },
      {
        color: "#1fb6ff",
        icon: "mdi-content-cut",
        title: "Step 5 - Cut it out and glue it into the map",
        desc: "",
      },
    ],
  }),
  created() {
    const countries = [" Germany", " France", " Italy", " UK", " Europe"];
    let i = 1;
    setInterval(() => {
      document.getElementById("homeloop").innerHTML = countries[i];
      document.getElementById("homeMap").innerHTML =
        '<img src="../img/' + i + '.png">';
      i++;
      if (i === 5) {
        i = 0;
      }
    }, 3000);
  },
  methods: {},
};
</script>

<style>
#homeloop,
#homeMap img {
  opacity: 0;
  animation: fade infinite 3s;
}
@keyframes fade {
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
}
#homeMap img,
#homebg img {
  width: 33vw;
}
.home img {
  margin-top: -88px;
}
/* Base styling */
.header-top-image {
  max-height: 700px;
}
a {
  text-decoration: none;
}
.introduction {
  padding: 100px 0 200px 0;
}

/* Media Queries */
@media only screen and (max-width: 960px) {
  .skill {
    border-bottom: 1px solid #bdbdbd;
  }
  .headerLogo {
    max-height: 280px !important;
    max-width: 240px !important;
  }
  .home {
    margin-top: 20px;
  }
  .introduction {
    padding: 40px 0 200px 0;
  }
  .headerLogo {
    height: 300px;
    width: 250px;
  }
  .introduction-title {
    font-size: 50px !important;
  }
  .introduction-content {
    font-size: 34px !important;
  }
}
@media only screen and (max-width: 600px) {
  .introduction-title {
    font-size: 40px !important;
  }
  .introduction-content {
    font-size: 24px !important;
  }
}
</style>