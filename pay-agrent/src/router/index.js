import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/login.vue')
    },
    {
      path: '/',
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
          path: '/agrentManage/MerchantAdd',
          name: 'MerchantAdd',
          component: () => import('../components/agrentManage/MerchantAdd.vue'),
          meta: {title: '添加商户'}
        },
        {
          path: '/agrentManage/EditPayPassword',
          name: 'EditPayPassword',
          component: () => import('../components/agrentManage/EditPayPassword.vue'),
          meta: {title: '修改支付密码'}
        },
        {
          path: '/agrentManage/EditPassword',
          name: 'EditPassword',
          component: () => import('../components/agrentManage/EditPassword.vue'),
          meta: {title: '修改密码'}
        },
        {
          path: '/agrentManage/BindingGoole',
          name: 'BindingGoole',
          component: () => import('../components/agrentManage/BindingGoole.vue'),
          meta: {title: '绑定谷歌验证器'}
        },
        {
          path: '/agrentManage/Nafe',
          name: 'Nafe',
          component: () => import('../components/agrentManage/Nafe.vue'),
          meta: {title: '纳费'}
        },
        {
          path: '/agrentManage/EbankOrder',
          name: 'EbankOrder',
          component: () => import('../components/agrentManage/EbankOrder.vue'),
          meta: {title: '网银订单明细'}
        },
        {
          path: '/agrentManage/agrenorder',
          name: 'AgrenOrder',
          component: () => import('../components/agrentManage/agrenorder.vue'),
          meta: {title: '代付订单明细'}
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
