// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

Vue.use(Element)
Vue.filter('filterLengthSplit', function (val) {
  console.log(val)
  if (val.length > 10) {
    val = val.slice(0, 10) + '...'
    return val
  }
})
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  // console.log(to)
  if (to.path == '/login') {
    sessionStorage.removeItem('user_token')
  }
  const userToken = sessionStorage.getItem('user_token')
  if (!userToken && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
