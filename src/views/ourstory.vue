<template>
  <div class="home" id="ourstory">
    <v-row
      align="center"
      justify="center"
      class="py-md-6 px-5 introduction-row"
    >
      <div class="introduction px-3">
        <div class="display-2 pb-3 pb-md-12">
          <p>
            <span class="introduction-title text-h3"
              >Our Story</span
            ><br />
          </p>
        </div>
      </div>
    </v-row>
    <!--main-content section-->
    <v-row align="center" justify="center" class="main-content pb-6">
      <v-col cols="10" md="10" lg="9" xl="6">
        <v-card style="padding: 1rem 6rem" align="middle" justify="center">
          <p class="text-h5 font-weight-bold block">
            Would you spend countless hours obsessing over the various creases
            and details of a seemingly insignificant piece of paper?
          </p>
          <p class="text-h6">Because I do.</p>
          <p class="text-h5 font-weight-bold block">
            What if I told you that there was a way to engrave all the times of
            uncertainty, excitement and joy while being away from your home just
            by a single scratch?
          </p>

          <p class="text-h6">
            Would you travel more? I don’t know about you but I’ve always loved
            to travel.
          </p>
          <p class="text-h6">
            And every December I go skiing with my family in the French Alps.
          </p>
          <p class="text-h6">But in 2016 something was a bit different...</p>
          <p class="text-h6">
            Half way through our journey, after a long day of skiing, we entered
            a cute little mountain hut to warm up.
          </p>
          <p class="text-h6">
            And as I was drinking my warm ginger tea, I glimpsed at an almost
            unnoticeable map on the wall.
          </p>
          <p class="text-h6">
            Upon a closer look, I noticed that some parts of the map where dark,
            some parts were colorful.
          </p>
          <p class="text-h6">
            And it wasn’t because it marked oceans or countries...
          </p>
          <p class="text-h6">
            Who in their right mind would want such a weird map? After brushing
            my fingers through the surface I realised
          </p>
          <p class="text-h6">that it was scratchable.</p>
          <p class="text-h6">
            Travellers (just like me) could literally scratch off the places
            they’ve visited and create new goals to travel more.
          </p>
          <p class="text-h6">So that the map could be lighter and lighter.</p>
          <p class="text-h6">
            And the number of places you’ve been to - higher and higher.
          </p>
          <p class="text-h6">
            With your understanding of the world - broader and broader.
          </p>
          <p class="text-h6">
            I had to have one. When I came back to Lithuania I started searching
            for similar maps for my very own family.
          </p>
          <p class="text-h6">
            But all of the maps I found were either imported from China, bad
            quality or not very detailed. Really, they were like a sad knock-off
            of a real world map.
          </p>
          <p class="text-h6">
            For example, if I wanted to scratch off Texas - I would have to
            absolutely NAIL the location on the map because it just wasn’t
            marked.
          </p>
          <p class="text-h6">
            And don’t even get me started on the amount of missed islands on the
            other maps.
          </p>
          <p class="text-h3">Absurd.</p>
          <p class="text-h6">
            Out of that frustration I decided to create my very own maps - ones
            that me and you could actually be proud of.
          </p>
          <p class="text-h5 font-weight-bold block">
            MADE FOR TRAVELLERS, BY TRAVELLERS
          </p>
          <p class="text-h6">
            This simple philosophy has been the backbone of everything we do
            here at SmilesMap.
          </p>
          <p class="text-h6">
            No cutting corners or sacrificing quality materials in order to save
            a couple of bucks.
          </p>
          <p class="text-h6">
            Long ago, we realised, that every little detail of the earth, for
            each traveller, is more important than the other.
          </p>
          <p class="text-h6">
            Maybe that’s why we’re the only manufacturer of scratchable maps
            that have detailed and geographically accurate mountain tops,
            rivers, lakes, islands, regions and states.
          </p>
          <p class="text-h6">
            And maybe that’s why our maps don’t break even after 5 or 10 years
            after being sold.
          </p>
          <p class="text-h6">
            By combining the highest quality materials, top printing technology
            and a simple philosophy we are able to deliver maps, that you
            wouldn’t be afraid to give to your best friends, colleagues or
            family members as gifts.
          </p>
          <p class="text-h5 font-weight-bold block">
            Because every traveller has a different story.
          </p>
          <p class="text-h5 font-weight-bold block">
            And those stories come into a single journey.
          </p>
          <p class="text-h5 font-weight-bold block">
            So save it on a SmilesMap.
          </p>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
#ourstory {
  background-size: 55vh;
  background-position: top right;
  background-repeat: no-repeat; /* Do not repeat the image */
}
.home img {
  margin-top: -88px;
}
/* Base styling */
.header-top-image {
  max-height: 700px;
}
.cross-out {
  text-decoration: line-through;
}
a {
  text-decoration: none;
}
.introduction {
  padding: 100px 0 200px 0;
}
.main-content {
  margin-top: -150px;
}
.skill-icon {
  font-size: 70px !important;
}
.project-chip {
  pointer-events: none;
}

/* Media Queries */
@media only screen and (max-width: 960px) {
  .skill {
    border-bottom: 1px solid #bdbdbd;
  }
  .strike {
    text-decoration: line-through;
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

/* Animations */

@media only screen and (min-width: 960px) {
  @keyframes strike {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
  .strike {
    position: relative;
  }
  .strike::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 3px;
    background: black;
    animation-name: strike;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
}

@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  opacity: 0; /* make things invisible upon start */
  -webkit-animation: fadeIn ease-in 1; /* call our keyframe named fadeIn, use animattion ease-in and repeat it only 1 time */
  -moz-animation: fadeIn ease-in 1;
  animation: fadeIn ease-in 1;

  -webkit-animation-fill-mode: forwards; /* this makes sure that after animation is done we remain at the last keyframe value (opacity: 1)*/
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;

  -webkit-animation-duration: 1.5s;
  -moz-animation-duration: 1.5s;
  animation-duration: 1.5s;
}
.fade-in.one {
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.fade-in.two {
  -webkit-animation-delay: 1.2s;
  -moz-animation-delay: 1.2s;
  animation-delay: 1.2s;
}
.fade-in.three {
  -webkit-animation-delay: 1.8s;
  -moz-animation-delay: 1.8s;
  animation-delay: 1.8s;
}
.fade-in.four {
  -webkit-animation-delay: 2.4s;
  -moz-animation-delay: 2.4s;
  animation-delay: 2.4s;
}
</style>