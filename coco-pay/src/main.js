// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)

Vue.config.productionTip = false

/* 防止未登录跳转到里面页面 */
// router.beforeEach((to, from, next) => {
//   // console.log(to)
//   if (to.path == '/login') {
//     sessionStorage.removeItem('user_token')
//     sessionStorage.removeItem('user_tokenTwo')
//     sessionStorage.removeItem('user_name')
//     sessionStorage.removeItem('user_clientId')
//   }
//   // next()
//   const userToken = sessionStorage.getItem('user_token')
//   const userTokenTwo = sessionStorage.getItem('user_tokenTwo')
//   const showToken = userToken || userTokenTwo
//   if (!showToken && to.path != '/login') {
//     next({ path: '/login' })
//   } else {
//     next()
//   }
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
