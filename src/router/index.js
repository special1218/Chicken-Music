import Vue from 'vue'
import Router from 'vue-router'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import body01 from '../components/body/body01'
import body02 from '../components/body/body02'
import body03 from '../components/body/body03'
import body04 from '../components/body/body04'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/body01'
    },
    {
      path: '/body01',
      component: body01
    },
    {
      path: '/body02',
      component: body02
    },
    {
      path: '/body03',
      component: body03
    },
    {
      path: '/body04',
      component: body04
    }
  ]
})
