<template>
  <div class="headerTop">
    <div class="header-logo">
      LOGO
    </div>
    <div class="header-crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <!--<el-breadcrumb-item v-for="item in routeList" :key="item.path" :to="item.path">{{item.meta.title}}</el-breadcrumb-item>-->
        <el-breadcrumb-item v-for="item in routeList" :key="item.path" :to="{ path: '/agrentManage/BasicInfo' }">{{item.meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderTop',
  data: function () {
    return {
      routeList: []
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
    }
  },
  created () {
    // this.getBreadcrumb()
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
