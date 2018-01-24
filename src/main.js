import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import Axios from 'axios'
Vue.prototype.$http = Axios

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
