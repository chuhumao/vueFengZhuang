<template>
  <div>
    <el-card class="box-card">
      <!--搜索-->
      <div>
        <div class="selectText">
          <i></i>
          <span>网银订单实时查询</span>
        </div>
        <div class="selectInput">
          <div class="selectInput-content">
            <span>网关订单号：</span>
            <el-input v-model="params.orderNo" placeholder="请输入内容"></el-input>
          </div>
          <div class="selectInput-content">
            <span>商户订单号：</span>
            <el-input v-model="params.clientOrderNo" placeholder="请输入内容"></el-input>
          </div>
          <!--<div class="selectInput-content">
            <span>支付状态：</span>
            <el-input v-model="params.state" placeholder="请输入内容" style="width: 75%;"></el-input>
          </div>-->
          <div class="selectInput-content">
            <span>商户号：</span>
            <el-input v-model="params.clientId" placeholder="请输入内容"></el-input>
          </div>
          <div class="selectInput-content">
            <span>订单来源：</span>
            <el-input v-model="params.source" placeholder="请输入内容"></el-input>
          </div>
          <div class="selectInput-content">
            <span>网关：</span>
            <el-select v-model="params.bankName" placeholder="请选择">
              <el-option
                v-for="item in payOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="selectInput-content">
            <span>支付状态：</span>
            <el-select v-model="params.paymentState" placeholder="请选择">
              <el-option
                v-for="item in payOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="selectInput-content">
            <span>风控状态：</span>
            <el-select v-model="params.riskState" placeholder="请选择">
              <el-option
                v-for="item in windOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="selectInput-content">
            <span>通知状态：</span>
            <el-select v-model="params.notifyState" placeholder="请选择">
              <el-option
                v-for="item in payOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="selectInput-content selectInput-content-last">
            <span>交易时间：</span>
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
          <div class="el-col-4" style="margin-top:10px;">
            <el-button type="primary" @click="search">查询</el-button>
            <el-button type="warning" @click="reset">重置</el-button>
          </div>
          <div class="clear"></div>
        </div>
      </div>
      <!--列表-->
      <div>
        <el-table
          ref="multipleTable"
          :data="tableData"
          border
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
          align="center"
        >
          <!--<el-table-column
            type="selection"
            width="55">
          </el-table-column>-->
          <el-table-column
            prop="id"
            label="ID"
            width="100"
            align="center">
          </el-table-column>
          <el-table-column
            prop="orderNo"
            label="网关订单号"
            width="200"
            align="center">
            <template slot-scope="scope">
              <el-tooltip trigger="hover"  class="item" effect="dark" content="Top Center 提示文字" placement="top">
                <div slot="content">{{ scope.row.orderNo }}</div>
                <span>{{ scope.row.orderNo | filterLengthSplit }}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column
            prop="clientOrderNo"
            label="商户订单号"
            width="200"
            align="center">
            <template slot-scope="scope">
              <el-tooltip trigger="hover"  class="item" effect="dark" content="Top Center 提示文字" placement="top">
                <div slot="content">{{ scope.row.clientOrderNo }}</div>
                <span>{{ scope.row.clientOrderNo | filterLengthSplit }}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column
            prop="paymentState"
            label="支付状态"
            width="150"
            align="center">
            <template slot-scope="scope">
              <span v-if="scope.row.paymentState == 'INIT'">初始</span>
              <span v-else-if="scope.row.paymentState == 'SUCCESS'">成功</span>
              <span v-else>失败</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="bankName"
            label="网关"
            width="150"
            align="center">
          </el-table-column>
          <el-table-column
            prop="riskState"
            label="风控状态"
            width="130"
            align="center">
            <template slot-scope="scope">
              <span v-if="scope.row.riskState == 'NORMAL'">正常</span>
              <span v-else>冻结</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="notifyState"
            label="通知状态"
            width="130"
            align="center">
            <template slot-scope="scope">
              <span v-if="scope.row.paymentState == 'INIT'">初始</span>
              <span v-else-if="scope.row.paymentState == 'SUCCESS'">成功</span>
              <span v-else>失败</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="clientId"
            label="商户号"
            width="130"
            align="center">
          </el-table-column>
          <el-table-column
            prop="receiveTime"
            label="交易时间"
            width="180"
            align="center">
          </el-table-column>
          <el-table-column
            prop="source"
            label="订单来源"
            width="130"
            align="center">
            <template slot-scope="scope">
              <span v-if="scope.row.paymentState == 'INTERFACE'">接口</span>
              <span v-else>后台</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="clientName"
            label="商户名称"
            width="180"
            align="center">
          </el-table-column>
          <el-table-column
            prop="amount"
            label="交易金额"
            width="180"
            align="center">
          </el-table-column>
          <el-table-column
            prop="handingFee"
            label="手续费"
            width="150"
            align="center">
          </el-table-column>
          <el-table-column
            prop="amountClientIncome"
            label="收益"
            width="150"
            align="center">
          </el-table-column>
          <el-table-column
            prop="complateTime"
            label="支付完成时间"
            width="230"
            align="center">
          </el-table-column>
          <el-table-column
            prop="notifyComplateTime"
            label="通知完成时间"
            width="230"
            align="center">
          </el-table-column>
        </el-table>
      </div>
      <!--分页-->
      <div>
        <el-pagination
          background
          layout="total,prev, pager, next,jumper"
          :total="params.total"
          :page-size="params.pageSize"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
import { bankOrderList } from '@/JS/getData'
export default {
  name: 'EbankOrder',
  data () {
    return {
      page: {
        currentPage: 1,
        total: 10
      },
      params: {
        pageNum: 1, // 页数
        pageSize: 8, // 每页显示条数
        total: 10 // 总条数
      },
      tableData: [],
      payOptions: [
        {value: '', label: '全部'},
        {value: 'INIT', label: '初始'},
        {value: 'SUCCESS', label: '成功'},
        {value: 'FAILED', label: '失败'}
      ],
      windOptions: [
        {value: '', label: '全部'},
        {value: 'NORMAL', label: '正常'},
        {value: 'FREEZE', label: '冻结'}
      ],
      value: '',
      date1: null
    }
  },
  methods: {
    getOrderList () {
      bankOrderList(this.params)
        .then(res => {
          console.log(res)
          if (res.code == 200) {
            this.tableData = res.data.list
            this.params.total = res.data.total
            // this.$message.success(res.message)
          } else this.$message.error(res.message)
        })
    },
    handleSelectionChange (val) {
      console.log(val)
    },
    handleCurrentChange (val) {
      console.log(val)
      this.params.pageNum = val
      this.getOrderList()
    },
    search () {
      if (this.date1) {
        this.params.startTime = this.date1[0]
        this.params.endTime = this.date1[1]
      } else {
        this.params.startTime = null
        this.params.endTime = null
      }
      this.getOrderList()
    },
    reset () {
      this.params = {
        pageNum: 1, // 页数
        pageSize: 8, // 每页显示条数
        total: 10 // 总条数
      }
      this.date1 = null
      this.getOrderList()
    }
  },
  created () {
    this.getOrderList()
  }
}
</script>

<style scoped lang="less">
  @import "../../Css/public";
</style>
