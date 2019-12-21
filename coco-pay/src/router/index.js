import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../components/login.vue')
    },
    {
      path: '/Home',
      name: 'Home',
      component: () => import('../components/Home.vue'),
      meta: {title: '首页'},
      children: [
        {
          path: '/agrentManage/MerchantList',
          name: 'MerchantList',
          component: () => import('../view/agrentManage/MerchantList.vue'),
          meta: {title: '商户列表'}
        },
        {
          path: '/agrentManage/BasicInfo',
          name: 'BasicInfo',
          component: () => import('../view/agrentManage/BasicInfo.vue'),
          meta: {title: '购物车'}
        },
      ]
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../components/mistake/404.vue')
    }
  ]
})
