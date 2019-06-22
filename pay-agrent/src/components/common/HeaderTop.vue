<template>
  <div class="headerTop">
    <div class="header-logo">
      LOGO
    </div>
    <div class="header-crumbs">
      <el-breadcrumb separator-class="el-icon-d-arrow-right">
        <!--<el-breadcrumb-item v-for="item in routeList" :key="item.path" :to="item.path">{{item.meta.title}}</el-breadcrumb-item>-->
        <el-breadcrumb-item v-for="item in routeList" :key="item.path" :to="{ path: '/agrentManage/BasicInfo' }">
          <span style="color:#fff;">{{item.meta.title}}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="header-user">
      <!--头像,-用户名-->
      <div style="text-align:right;">
        <span class="hidden-md-and-down">用户名：</span>
        <span>{{ userName }}</span>
      </div>
      <!--消息通知-->
      <!--<div>
        <img src="../../assets/Home/AgrentLing.png" height="30" width="25"/>
        <span>消息</span>
      </div>-->
      <!--个人中心-->
      <div class="userOne" @mouseover="userContentAudit">
        <img class="hidden-sm-and-down" src="../../assets/Home/AgrentName.png" height="28" width="28"/>
        <span>个人中心</span>
        <div v-show="userContent" class="userClick" @mouseleave="userContent = false">
          <p @click="removeUser">退出</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderTop',
  data: function () {
    return {
      routeList: [],
      userContent: false,
      userName: null
    }
  },
  methods: {
    getBreadcrumb () {
      // console.log(this.$route.matched)
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]
      if (first && first.name.trim().toLocaleLowerCase()) {
        // matched = [{ path: '/Home', meta: { title: '首页' }}].concat(matched)
        matched = matched
      }
      this.routeList = matched
    },
    removeUser () {
      this.$router.push({name: 'login'})
      sessionStorage.removeItem('user_token')
    },
    userContentAudit () {
      this.userContent = true
      if (this.userContent) {
        setTimeout(() => {
          this.userContent = false
        }, 10000)
      }
    }
  },
  created () {
    this.getBreadcrumb()
    this.userName = sessionStorage.getItem('user_name');
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  }

}
</script>

<style scoped lang="less">
  @import "../../Css/Home";
</style>
