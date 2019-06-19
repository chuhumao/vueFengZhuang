<template>
  <div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo menuList"
      :unique-opened="true"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      v-for="(item,itemKey) in menuList" :key="itemKey"
      :router="true"
    >
      <el-submenu :index="item.routerLink"  v-if="item.childrenList" style="text-align:left;text-indent:20px;">
        <template slot="title">
          <!--<i class="el-icon-location"></i>-->
          <span>{{ item.title }}</span>
        </template>
        <!--<el-submenu index="1-4" >
          <template slot="title">{{itemChildren.title}}</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>-->
        <el-menu-item-group v-for="(itemChildren,childrenKey) in item.childrenList" :key="childrenKey">
          <el-menu-item :index="itemChildren.routerLink">
            {{ itemChildren.title }}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item :index="item.routerLink" v-else @click="colorSpan"  style="text-align:left;text-indent:20px;">
        <!--<span>{{ item.title }}</span>-->
        {{ item.title }}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'menuList',
  data () {
    return {
      openList: null,
      menuList: [
        {title: '代理商管理',
          id: 1,
          childrenList: [
            {title: '基本信息', id: 11, routerLink: '/agrentManage/BasicInfo'},
            {title: '商户列表', id: 12, routerLink: '/agrentManage/MerchantList'},
            {title: '修改密码', id: 14, routerLink: '/agrentManage/EditPassword'},
          ]
        },
        {
          title: '信息面板',
          id: 2,
          routerLink: '/information/information'
        },
        {
          title: '资金流水',
          id: 3,
          routerLink: '/fund/fundWater'
        }
      ]
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
    },
    colorSpan () {
      // console.log(1)
    },
    getBreadcrumb () {
      console.log(this.$route)
      this.openList = this.$route.path
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
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

</style>
