<template>
    <div>
      <el-card class="box-card">
        <!--搜索-->
        <div>
          <div class="selectText">
            <i></i>
            <span>实时查询</span>
          </div>
          <div class="selectInput">
            <div class="selectInput-content">
              <span>订单号：</span>
              <el-input v-model="params.input" placeholder="请输入内容" style="width: 85%;"></el-input>
            </div>
            <div class="selectInput-content">
              <span>类型：</span>
              <el-select v-model="params.value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="selectInput-content">
              <span>创建时间：</span>
              <el-date-picker
                v-model="date1"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd HH:mm:ss"
                :default-time="['00:00:00', '23:59:59']"
              >
                <!--style="width:394px;height:34px;line-height:28px;"-->
              </el-date-picker>
            </div>
          </div>
        </div>
        <!--列表-->
        <div>
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        </div>
        <!--分页-->
        <div>
          <el-pagination
            background
            layout="total,prev, pager, next,jumper"
            :total="params.total">
          </el-pagination>
        </div>
      </el-card>
    </div>
</template>

<script>
import { getLoginCode } from '@/JS/getData'
export default {
  name: 'MerchantList',
  data () {
    return {
      page: {
        currentPage: 1,
        total: 10
      },
      params: {
        pageNum: 1, // 页数
        pageSize: 8, // 每页显示条数
        total: 10, // 总条数
        loginName: 'danny'
      },
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      value: '',
      date1: null
    }
  },
  methods: {
    getOrderList () {
      getLoginCode(this.params)
        .then(res => {
          console.log(res)
        })
    }
  },
  created () {
    this.getOrderList();
  }
}
</script>

<style scoped lang="less">
  @import "../../Css/public";
.selectInput{
  display: flex;
  /*width: 100%;*/
  flex-wrap:wrap;
  align-items:center;
  margin:20px 0;
  .selectInput-content{
    float:left;
    width: 484px;
    margin-top:10px;
    /*width: 100px;*/
    /*span{
    }*/
  }
  .selectInput-content:nth-child(2){
    width:290px;
  }
}
</style>
