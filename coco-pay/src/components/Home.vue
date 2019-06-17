<template>
  <div class="hello">
    <el-container>
      <el-header class="headerTop">
        <HeaderTop></HeaderTop>
      </el-header>
      <el-container>
        <el-aside class="AsideLeft" width="220px">
          <Menu></Menu>
        </el-aside>
        <el-main class="MainRight">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from '../components/menu/menuList'
import HeaderTop from '../components/common/HeaderTop'
export default {
  name: 'HelloWorld',
  components: {
    Menu,
    HeaderTop
  },
  data () {
    return {
      msg: [
        {html: '我叫张三，', age: 23, stature: 170},
        {html: '我叫张三1，', age: 24, stature: 171},
        {html: '我叫张三2，', age: 25, stature: 172},
        {html: '我叫张三3，', age: 26, stature: 173},
        {html: '我叫张三4，', age: 27, stature: 174}
      ]
    }
  },
  mounted () {
    this.msgObj()
  },
  methods: {
    msgObj () {
      // console.log(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .headerTop{
    padding: 0;
  }
</style>
