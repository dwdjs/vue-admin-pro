import Vue from 'vue'
import { cookie } from '@dwdjs/utils'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/style/index' // global css

import '@/registerServiceWorker'

import '@/icons'
import mini from '@/utils/mini'

import i18n from '@/lang' // Internationalization
import { isAuth } from '@/utils'
import '@/icons' // icon
import '@/errorLog' // error log
import '@/permission' // permission control
import '@/mock' // simulation data

import * as filters from '@/utils/filters' // global filters

Vue.use(Element, {
  size: cookie.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value),
})

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})


// import Page from '@/layout/Page';
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
// import '@/config/js-report';
console.warn('[main.js]')
// 全局组件
// Vue.component(Page.name, Page);
// 挂载全局
Vue.prototype.isAuth = isAuth

Object.keys(mini).forEach(key => {
  Vue.prototype[`$${key}`] = mini[key]
})

Vue.config.productionTip = false

if (process.env.NODE_ENV == 'development') {
  Vue.config.devtools = true
} else {
  Vue.config.devtools = false
}

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App),
})
