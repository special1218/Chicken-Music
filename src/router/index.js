import Vue from 'vue'
import Router from 'vue-router'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import lists from '../components/body/lists'
import singer from '../components/body/singer'
import body03 from '../components/body/body03'
import body04 from '../components/body/body04'
import singersXQ from '../components/singersXQ/singerXQ'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/lists'
    },
    {
      path: '/lists',
      component: lists
    },
    {
      path: '/singer',
      component: singer,
      children: [
	      {
				 	path: ':id',
				 	component: singersXQ
			  }
      ]
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
