<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="item"
      tooltip-effect="dark"
      style="width: 100%">
      <el-table-column
        align="center"
        type="index"
        :index="indexMethod">
      </el-table-column>
      <el-table-column
        align="center"
        prop="count"
        label="金额"
        width="120">
      </el-table-column>
      <el-table-column
        align="center"
        prop="title"
        label="商品名称"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        align="center"
        prop="contentCount"
        label="商品数量">
        <template slot-scope="scope">
          <div class="computeNumber">
            <span @click="subtractCount(scope.row)"> - </span>
            <el-input v-model="scope.row.contentCount" style="width: 40px;"
                      @keydown.native="keyCount(scope.row)"
                      @keyup.native="keyCountTwo(scope.row)"
                      maxLength="3"></el-input>
            <span @click="addCount(scope.row)"> + </span>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="totalAmount"
        label="商品总额"
        show-overflow-tooltip>
      </el-table-column>
      <!--<el-table-column
        align="center"
        label="操作按钮">
        <template slot-scope="scope">
          <el-button @click="deleteContent(scope.row)">删除</el-button>
        </template>
      </el-table-column>-->
    </el-table>
    <div>
      <el-button @click="toCar">前往购物车</el-button>
    </div>
  </div>
</template>

<script>
import Bus from '../../until/bus'
export default {
  name: 'MerchantList',
  data () {
    return {
      item: [
        {id: 6, count: 99, title: '第六个商品', contentCount: 0, totalAmount: 0},
        {id: 7, count: 22, title: '第七个商品', contentCount: 0, totalAmount: 0},
        {id: 8, count: 33, title: '第八个商品', contentCount: 0, totalAmount: 0},
        {id: 9, count: 33, title: '第九个商品', contentCount: 0, totalAmount: 0},
        {id: 10, count: 12, title: '第十个商品', contentCount: 0, totalAmount: 0}
      ],
      carTable: []
    }
  },
  methods: {
    // 进行减
    subtractCount (val) {
      if (val.contentCount > 0) {
        val.contentCount--
        let items = val.totalAmount - val.count
        val.totalAmount = items
      }
    },
    // 进行加
    addCount (val) {
      val.contentCount++
      let items = val.totalAmount + val.count
      val.totalAmount = items
    },
    // 按下键盘时，获取数量
    keyCount (val) {
      this.countMoneyOnce = val.contentCount
    },
    // 抬起键盘时，进行新数量与旧数量相减，在次进行计算单个商品数量的总价
    keyCountTwo (val) {
      let items = val.count * (val.contentCount - this.countMoneyOnce)
      val.totalAmount = items
    },
    // 删除某行数据
    deleteContent (val) {
      this.item.forEach((item, index) => {
        if (item.id == val.id) {
          this.item.splice(index, 1)
        }
      })
    },
    indexMethod (val) {
      return val + 1
    },
    // 跳转购物车
    toCar () {
      let arr = new Set()
      this.item.forEach(item => {
        if (item.contentCount > 0) {
          arr.add(item)
        }
      })
      let val = [...arr]
      this.$store.dispatch('setCarArr', val)
      this.$router.push({name: 'BasicInfo'})
    }
  },
  created () {

  }
}
</script>


<style scoped lang="less">
  .computeNumber{
    /*float:left;*/
    span{
      display: inline-block;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      border: 1px solid;
      cursor: pointer;
    }
  }
  /deep/.el-input {
    input{
      padding: 0;
      text-align: center;
    }
  }
</style>
