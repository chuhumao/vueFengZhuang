<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="less">
  @import "Css/app.less";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
li{
  list-style: none;
}
  .login-background{
    .el-input__inner{
      border:1px solid #fff;
    }
    .el-form-item__content{
      line-height:52px;
    }
    .el-input__inner{
      height: 52px;
    }
  }
</style>
