<template>
    <div>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo menuList"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        v-for="(item,itemKey) in menuList" :key="itemKey"
      >
        <el-submenu :index="item.id+'-'+itemKey"  v-if="item.childrenList">
          <template slot="title">
            <!--<i class="el-icon-location"></i>-->
            <span>{{ item.title }}</span>
          </template>
          <!--<el-submenu index="1-4" >
            <template slot="title">{{itemChildren.title}}</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>-->
          <el-menu-item-group v-for="(itemChildren,childrenKey) in item.childrenList" :key="childrenKey">
            <el-menu-item :index="item.id + '-' + itemChildren.id">
              <router-link class="router-link-span" tag="span" :to="itemChildren.routerLink">{{ itemChildren.title }}</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item v-else @click="colorSpan">
          <!--<span>{{ item.title }}</span>-->
          <router-link class="router-link-span" tag="span" :to="item.routerLink">{{ item.title }}</router-link>
        </el-menu-item>
      </el-menu>
    </div>
</template>

<script>
export default {
  name: 'menuList',
  data () {
    return {
      menuList: [
        {title: '代理商管理',
          id: 1,
          childrenList: [
            {title: '基本信息', id: 11, routerLink: '/agrentManage/BasicInfo'},
            {title: '商户列表', id: 12, routerLink: '/agrentManage/MerchantList'},
            {title: '添加商户', id: 13, routerLink: '/agrentManage/MerchantAdd'},
            {title: '修改支付密码', id: 14, routerLink: '/agrentManage/EditPassword'},
            {title: '绑定谷歌验证器', id: 15, routerLink: '/agrentManage/BindingGoole'},
            {title: '纳费', id: 16, routerLink: '/agrentManage/Nafe'}
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
      console.log(1)
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
