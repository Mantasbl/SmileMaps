<template>
  <div class="home" id="ourstory">
    <v-row
      align="center"
      justify="center"
      class="py-md-6 px-5 introduction-row"
    >
      <div class="introduction px-3">
        <div class="display-2 pb-3 pb-md-12">
          <p><span class="introduction-title text-h3">FAQ</span><br /></p>
        </div>
      </div>
    </v-row>
    <!--main-content section-->
    <v-row align="center" justify="center" class="main-content pb-6">
      <v-col cols="10" md="10" lg="9" xl="6">
        <v-card style="padding: 1rem 6rem" align="middle" justify="center">
          <p class="text-h5 font-weight-bold block">
            When do I need to order by for delivery before Christmas?
          </p>
          <p class="text-h6">
            This year demand for shipping around the holidays is predicted to be
            extremely high which may affect our delivery services and supply. We
            predict that this may affect our holiday shipping cut off and would
            encourage you to start your holiday shopping early to ensure
            delivery in time.
          </p>
          <p class="text-h5 font-weight-bold block">
            I'm giving this as a gift, will the recipient see the price?
          </p>
          <p class="text-h6">
            We never include the price in the box. The recipient will see our
            brand name, the name of the person who ordered, and and links to our
            website so they can create their photos. You can include a gift note
            simply by typing into the "Add a note about this order" box on the
            checkout page. The recipient will see this note on the packing slip
            in their box.
          </p>
          <p class="text-h5 font-weight-bold block">
            Do you offer gift wrapping?
          </p>
          <p class="text-h6">
            Due to the size and packaging we are unable to offer gift wrapping.
            We can place a sticker on the box that states "Do not open until
            Christmas" or "Do not open until [date]". If you'd like that sticker
            on the box, please leave a note on the order indicating that
            request.
          </p>
          <p class="text-h5 font-weight-bold block">
            Changing or cancelling orders
          </p>
          <p class="text-h6">
            You are welcome to change or cancel your order within 12 hours after
            ordering by contacting us. If more than 12 hours have passed we will
            still allowchanges or cancellations as long as your order has not
            shipped yet.
          </p>
          <p class="text-h5 font-weight-bold block">Return policy</p>
          <p class="text-h6">
            We accept returns for any reason, but the buyer will be responsible
            for the cost of return shipping. Please contact us for instructions
            on how to return an item.
          </p>
          <p class="text-h5 font-weight-bold block">Shipping to PO Boxes</p>
          <p class="text-h6">
            Due to the size of our items we cannot ship to PO Boxes. Our website
            does not give us a way to prevent you from typing in a PO box but
            any orders placed to a PO box will be cancelled and refunded soon
            after ordering. Should I order with or without the frame?
          </p>
          <p class="text-h5 font-weight-bold block">
            Most of our items are standard frame sizes so we sell them without
            the frame in case you would like to choose your own frame. Our
            frames have specialized hardware on the back made for repeated
            opening and closing as you fill your map over the years.
          </p>
          <p class="text-h6">
            If you prefer to purchase your own frame then please make sure it
            can accommodate the thickness of all 3 mat boards (3/16" total).
            Most frames can do this but thinner ones such as poster frames may
            have trouble. We also sell our frames on there own in case you
            purchase without a frame and later decide you would like to use
            ours.
          </p>
          <p class="text-h5 font-weight-bold block">
            Can you make a map of ______?
          </p>
          <p class="text-h6">
            At this time we cannot make any custom maps that are not listed in
            our shop.
          </p>
          <p class="text-h5 font-weight-bold block">
            Will my photo map arrive before ______?
          </p>
          <p class="text-h6">
            We ship all products within 2 business days of ordering. So if you
            order on a Tuesday it will ship by Thursday. We ship using ground
            service from our facility in Troy, Michigan and transit time takes
            1-5 business days depending on how close you are to us* Due to the
            size of our items we cannot offer any express shipping options.
          </p>
          <p class="text-h5 font-weight-bold block">
            Feel free to leave a note at checkout if you need it by a certain
            date. We read every note, and if we can't get it there in time we
            will let you know before proceeding with the order.
          </p>
          <p class="text-h6">
            *Alaska and Hawaii may be longer than 5 business days.
          </p>
          <p class="text-h5 font-weight-bold block">How do I track my order?</p>
          <p class="text-h6">
            Once your order ships, you will receive an email with a link to
            track your package. If you do not see the email, please check your
            spam folder as they sometimes get filtered out. If you did not
            receive it, please contact us and we can send you the tracking
            information directly. Do you ship internationally?
          </p>
          <p class="text-h5 font-weight-bold block">
            We can ship internationally per request; however, the customer is
            responsible for all shipping fees as well as any additional taxes of
            duty fees on the shipment. If you are interested in internationally
            shipping, please contact us with your postal code and we would be
            happy to give a quote for the shipping price.
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