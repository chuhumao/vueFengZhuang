<template>
  <div>
    <el-menu
      :default-active="$route.path"
      router
      :default-openeds="activeIndex"
      class="el-menu-vertical-demo menuList mymenu"
      unique-opened
      @select="handSelect"
      @open="handleOpen"
      background-color="#304156"
      text-color="#A7B1C3"
      v-for="(item,itemKey) in menuList"
      :key="itemKey"
    >
      <el-submenu
        :index="item.routerLink+ ''"
        v-if="item.childrenList"
        style="text-align:left;text-indent:20px;"
      >
        <template slot="title">
          <!--<img :src="item.imgSrc" alt />-->
          <span class="itemList">{{ item.title }}</span>
        </template>
        <el-menu-item-group
          v-for="(itemChildren,childrenKey) in item.childrenList"
          :key="childrenKey"
        >
          <el-menu-item :index="itemChildren.routerLink+ ''" @click="colorSpan(itemChildren)">
            <!--<img v-show="!itemChildren.selectJudgeImg" :src="itemChildren.imgSrc" alt />-->
            <!--<img v-show="itemChildren.selectJudgeImg" :src="itemChildren.imgSrcTwo" alt />-->
            <span class="itemList">{{ itemChildren.title }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item
        class="itemList"
        :index="item.routerLink+ ''"
        v-else
        style="text-align:left;text-indent:20px;"
      >
        <!--<img :src="item.imgSrc" alt />-->
        <span class="itemList">{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'menuList',
  data () {
    return {
      // 点击时获取到的菜单
      activeIndex: [],
      openList: null,
      // 接收菜单数组并调用渲染
      menuList: [
        {title: '代理商管理',
          id: 1,
          // imgSrc: require('../../assets/menu/merchantFamily.png'),
          routerLink: '/merchantManage',
          childrenList: [
            {
              title: '基本信息',
              id: 11,
              routerLink: '/agrentManage/BasicInfo',
              selectJudgeImg: false,
              // imgSrc: require('../../assets/menu/merchantMessage.png'),
              // imgSrcTwo: require('../../assets/menu/merchantMessageTwo.png')
            },
            {title: '商户列表', id: 12, routerLink: '/agrentManage/MerchantList'},
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
      // console.log(key)
      // 当前打开的sub-menu的 key 数组 关闭其他子菜单
      this.activeIndex = [key]
    },
    handSelect (key, keyPath) {
      // console.log(key, keyPath)
    },
    getBreadcrumb () {
      // this.openList = this.$route.path
    },
    // 点击子菜单更换图片
    colorSpan (val) {
      // console.log(val)
      this.menuList.forEach((item) => {
        if (item.childrenList) {
          item.childrenList.forEach((itemChildren) => {
            itemChildren.selectJudgeImg = false
          })
        }
      })
      val.selectJudgeImg = !val.selectJudgeImg
      sessionStorage.setItem('menuListArr', JSON.stringify(this.menuList))
    },
  },
  watch: {
    $route: 'getBreadcrumb'
  },
  created () {
    // console.log(qs.stringify(sessionStorage.getItem('menuList')))
    this.menuList = JSON.parse(sessionStorage.getItem('menuListArr')).length > 0 ? JSON.parse(sessionStorage.getItem('menuListArr')) : this.menuList
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
