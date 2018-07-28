import Vue from 'vue'
import router from 'router'
import store from 'store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import VCharts from 'v-charts' //基于百度ECharts

import 'assets/styles/index.less'

import App from './App'

Vue.use(ElementUI)
Vue.use(VCharts)

Vue.config.productionTip = false 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
