<template>
  <div>
    <el-menu
      :default-active="openList"
      class="el-menu-vertical-demo menuList"
      :unique-opened="true"
      @select="handSelect"
      background-color="#4B5C85"
      text-color="#fff"
      v-for="(item,itemKey) in menuList" :key="itemKey"
    >
      <!--:index="item.routerLink"-->
      <el-submenu :index="item.id.toString()"  v-if="item.childrenList" style="text-align:left;text-indent:20px;">
        <template slot="title">
          <!--<i class="el-icon-location"></i>-->
          <span>{{ item.title }}</span>
        </template>
        <!--<el-submenu index="1-4" >
          <template slot="title">{{itemChildren.title}}</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>-->
        <el-menu-item-group v-for="(itemChildren,childrenKey) in item.childrenList" :key="childrenKey">
          <el-menu-item :index="itemChildren.id.toString()" @click="colorSpan(itemChildren.title)">
            <router-link :to="itemChildren.routerLink" tag="div"  class="itemChildrenList">{{ itemChildren.title }}</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item  :index="item.id.toString()" v-else @click="colorSpan(item.title)"  style="text-align:left;text-indent:20px;">
        <!--<span>{{ item.title }}</span>-->
        <router-link :to="item.routerLink" tag="div" class="itemList">{{ item.title }}</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'menuList',
  data () {
    return {
      openList: '/agrentManage/BasicInfo',
      menuList: [
        {title: '代理商管理',
          id: 1,
          childrenList: [
            {title: '基本信息', id: 11, routerLink: '/agrentManage/BasicInfo'},
            {title: '商户列表', id: 12, routerLink: '/agrentManage/MerchantList'},
            {title: '添加商户', id: 13, routerLink: '/agrentManage/MerchantAdd'},
            {title: '修改密码', id: 14, routerLink: '/agrentManage/EditPassword'},
            {title: '修改支付密码', id: 15, routerLink: '/agrentManage/EditPayPassword'},
            // {title: '绑定谷歌验证器', id: 16, routerLink: '/agrentManage/BindingGoole'},
            // {title: '纳费', id: 17, routerLink: '/agrentManage/Nafe'},
            {title: '网银订单明细', id: 18, routerLink: '/agrentManage/EbankOrder'},
            {title: '代付订单明细', id: 19, routerLink: '/agrentManage/agrenorder'}
          ]
        },
        {
          title: '信息面板',
          id: 2,
          routerLink: '/information/information'
        }
        /* {
          title: '资金流水',
          id: 3,
          routerLink: '/fund/fundWater'
        } */
      ],
      indexList: []
    }
  },
  methods: {
    handSelect (key, keyPath) {
      console.log(keyPath)
    },
    colorSpan (val) {
      let itemChildrenList = document.getElementsByClassName('itemChildrenList')
      for (let i of itemChildrenList) {
        if (i.innerHTML == val) {
          i.style.background = '#3C4A6A'
        } else {
          i.style.background = '#4B5C85'
        }
      }
    },
    getBreadcrumb () {
      let url = window.location.href
      this.openList = url.split('/#')[1]
    }
  },
  watch: {
    /* $route () {
      this.getBreadcrumb()
    } */
    '$route': 'getBreadcrumb'
  },
  created () {
    this.getBreadcrumb()
  }
}
</script>

<style scoped type="less">
.router-link-span{
  display: block;
  width: 100%;
  height:100%;
}:hover{
  color:rgb(255, 208, 75);
}
.el-menu-item{
  padding:0!important;
  text-align: center;
  text-indent: 10px;
  cursor: pointer;
}
.itemList{
  text-indent: 38px;
}
</style>
