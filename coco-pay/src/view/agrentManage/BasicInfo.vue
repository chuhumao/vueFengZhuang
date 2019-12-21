<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="item"
      tooltip-effect="dark"
      style="width: 100%"
      @select="handleSelectionChangeOnce"
      @selection-change="handleSelectionChange">
      <el-table-column
        align="center"
        type="index"
        :index="indexMethod">
      </el-table-column>
      <el-table-column
        align="center"
        type="selection"
        width="55">
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
      <el-table-column
        align="center"
        label="操作按钮">
        <template slot-scope="scope">
          <el-button @click="deleteContent(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align: right">金额：{{ countMoney }}</div>
    <div>
      <el-button @click="testClick">全选</el-button>
    </div>
  </div>
</template>

<script>
import Bus from '../../until/bus'
export default {
  name: 'BasicInfo',
  data () {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      item: [
        {id: 1, count: 1, title: '第一个商品', contentCount: 1, totalAmount: 0},
        {id: 2, count: 26, title: '第二个商品', contentCount: 1, totalAmount: 0},
        {id: 3, count: 34, title: '第三个商品', contentCount: 1, totalAmount: 0},
        {id: 4, count: 43, title: '第四个商品', contentCount: 1, totalAmount: 0},
        {id: 5, count: 56, title: '第五个商品', contentCount: 1, totalAmount: 0}
      ],
      /* 总金额 */
      countMoney: 0,
      /* 单个商品的总金额 */
      onceCountMoney: 0,
      /* 接收单个商品的数量 */
      countMoneyOnce: null,
      carArrOnce: []
    }
  },
  methods: {
    // 选中所有表格数据
    testClick () {
      this.item.forEach(item => {
        this.$refs.multipleTable.toggleRowSelection(item)
      })
    },
    // 判断是否被选中
    handleSelectionChangeOnce (val, item) {
      item.cancelOnce = !item.cancelOnce
    },
    // 选中的物品进行总价计算
    handleSelectionChange (val) {
      if (val.length > 0) {
        this.carArrOnce = val
        this.countMoney = 0
        val.forEach(item => {
          if (item.cancelOnce) {
            this.countMoney += item.totalAmount
          }
        })
      } else {
        this.countMoney = 0
      }
    },
    // 进行减
    subtractCount (val) {
      if (val.contentCount > 0) {
        val.contentCount--
        let items = val.totalAmount - val.count
        val.totalAmount = items
        this.searchIdCount(val)
      }
    },
    // 进行加
    addCount (val) {
      val.contentCount++
      let items = val.totalAmount + val.count
      val.totalAmount = items
      this.searchIdCount(val)
    },
    searchIdCount (val) {
      this.countMoney = 0
      for (let i in this.carArrOnce) {
        // if (this.carArrOnce[i].id == val.id) {
        if (this.carArrOnce[i].cancelOnce) {
          this.countMoney += this.carArrOnce[i].totalAmount
        }
        // }
      }
      // console.log(this.countMoney)
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
    // element-ui 自带的计算数量
    indexMethod (val) {
      return val + 1
    },
    // 获取其他地方添加进来的商品
    addSearch () {
      let arr = this.$store.state.carArr ? this.$store.state.carArr : []
      this.item = [...this.item, ...arr]
      // 刚进页面时获取到的单商品总价
      this.item.forEach(val => {
        val.totalAmount = val.contentCount * val.count
        val.cancelOnce = false
      })
      this.$forceUpdate()
      // sessionStorage.removeItem('historyCar')
    }
  },
  created () {
    this.addSearch()
    // 打乱下标
    // this.arr = this.$valueIndex().mecharList(this.arr)
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
