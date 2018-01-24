import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'

//Vue.use(VueLazyLoad)

Vue.use(VueLazyLoad,{
	loading: require('./assets/img/icon1.jpg')
})

Vue.config.productionTip = false

import Axios from 'axios'
Vue.prototype.$http = Axios

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
