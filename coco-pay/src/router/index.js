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
          path: '/information/information',
          name: 'information',
          component: () => import('../components/information/information.vue'),
          meta: {title: '信息面板'}
        },
        {
          path: '/agrentManage/BasicInfo',
          name: 'BasicInfo',
          component: () => import('../components/agrentManage/BasicInfo.vue'),
          meta: {title: '基本信息'}
        },
        {
          path: '/agrentManage/MerchantList',
          name: 'MerchantList',
          component: () => import('../components/agrentManage/MerchantList.vue'),
          meta: {title: '商户列表'}
        },
        {
          path: '/agrentManage/EditPassword',
          name: 'EditPassword',
          component: () => import('../components/agrentManage/EditPassword.vue'),
          meta: {title: '修改支付密码'}
        },
        {
          path: '/fund/fundWater',
          name: 'fundWater',
          component: () => import('../components/fund/fundWater.vue'),
          meta: {title: '资金流水'}
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
