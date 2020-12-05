<template>
  <div class="home" id="contactus">
    <!-- Header introduction section -->
    <!-- :src="require('@/assets/purplerbg.png')" -->
    <v-row
      align="center"
      justify="center"
      class="py-md-6 px-5 introduction-row"
    >
      <div class="introduction px-3">
        <div class="pb-3 pb-md-12">
          <p>
            <span
              class="introduction-title text-h3"
              >Contact Us</span
            >
          </p>
        </div>
      </div>
    </v-row>
    <!--Skills section-->
    <v-row align="center" justify="center" class="skills">
      <v-col cols="10" md="10" lg="9" xl="6">
        <v-card>
          <v-row class="px-12 pt-10" align="start" justify="center">
            <form class="contact-form pb-6" @submit.prevent="sendEmail">
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="50"
                label="Name"
                name="user_name"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                name="user_email"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
              <v-textarea
                v-model="message"
                :error-messages="messageErrors"
                label="Message"
                required
                @input="$v.message.$touch()"
                @blur="$v.message.$touch()"
              ></v-textarea>
              
              <v-btn class="mr-4 mb-2" @click="submit" type="submit" value="Send"> submit </v-btn>
              <v-btn @click="clear" class=" mb-2"> clear </v-btn>
            </form>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  validations: {
    message: { required },
    name: { required, maxLength: maxLength(50) },
    email: { required, email },
  },
  data: () => ({
      name: '',
      email: '',
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),

    computed: {
      messageErrors () {
        const errors = []
        if (!this.$v.message.$dirty) return errors
        !this.$v.message.required && errors.push('Message is required.')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 50 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    },
  methods: {
    sendEmail: (e) => {
      emailjs
        .sendForm(
          "contact_service",
          "contact_form",
          e.target,
          "user_KuVOZymhs6Os3EXAa1NYK"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    },
    submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.message = ''
      },
  },
};
</script>

<style>
.contact-form {
    width: 80%;
}
#contactus {
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
.skills {
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