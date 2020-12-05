import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'
import contactus from './views/contactus.vue'
import faq from './views/faq.vue'
import mapmaker from './views/mapmaker.vue'
import ourstory from './views/ourstory.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/ourstory',
      name: 'ourstory',
      component: ourstory
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: contactus
    },
    {
      path: '/faq',
      name: 'faq',
      component: faq
    },
    {
      path: '/mapmaker',
      name: 'mapmaker',
      component: mapmaker
    },
  ]
})
