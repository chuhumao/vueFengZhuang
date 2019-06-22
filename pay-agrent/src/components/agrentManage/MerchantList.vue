<template>
    <div>
      <el-card class="box-card">
        <!--搜索-->
        <div>
          <div class="selectText">
            <i></i>
            <span>商户实时查询</span>
          </div>
          <div class="selectInput">
            <div class="selectInput-content">
              <span>商户名称：</span>
              <el-input v-model="params.name" placeholder="请输入内容"></el-input>
            </div>
            <!--<div class="selectInput-content">
              <span>商户状态：</span>
              <el-input v-model="params.clientState" placeholder="请输入内容" style="width: 75%;"></el-input>
            </div>-->
            <!--<div class="selectInput-content">
              <span>审核状态：</span>
              <el-input v-model="params.state" placeholder="请输入内容" style="width: 75%;"></el-input>
            </div>-->
            <div class="selectInput-content">
              <span>商户号：</span>
              <el-input v-model="params.code" placeholder="请输入内容"></el-input>
            </div>
            <div class="selectInput-content">
              <span>商户状态：</span>
              <el-select v-model="params.clientState" placeholder="请选择">
                <el-option
                  v-for="item in MerchantsStatus"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="selectInput-content">
              <span>审核状态：</span>
              <el-select v-model="params.state" placeholder="请选择">
                <el-option
                  v-for="item in auditStatus"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <!--<div class="selectInput-content">
              <span>代付开关：</span>
              <el-select v-model="params.remitSwitch" placeholder="请选择">
                <el-option
                  v-for="item in remitSwitchOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>-->
            <!--<div class="selectInput-content">
              <span>代付后台开关：</span>
              <el-select v-model="params.remitBackSwitch" placeholder="请选择">
                <el-option
                  v-for="item in remitSwitchOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>-->
            <!--<div class="selectInput-content">
              <span>代付接口开关：</span>
              <el-select v-model="params.remitApiSwitch" placeholder="请选择">
                <el-option
                  v-for="item in remitSwitchOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>-->
            <!--<div class="selectInput-content">
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
                &lt;!&ndash;style="width:394px;height:34px;line-height:28px;"&ndash;&gt;
              </el-date-picker>
            </div>-->
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
            tooltip-effect="dark"
            border
            style="width: 100%"
            @selection-change="handleSelectionChange"
            align="center"
          >
            <!--<el-table-column
              type="selection"
              width="55">
            </el-table-column>-->
            <el-table-column
              prop="code"
              label="商户号"
              width="120"
              align="center">
              <!--<template slot-scope="scope">{{ scope.row.code | filterLengthSplit }}</template>-->
            </el-table-column>
            <el-table-column
              prop="name"
              label="商户名称"
              width="150"
              align="center">
            </el-table-column>
            <!--<el-table-column
              prop="address"
              label="地址"
              width="200"
              align="center">
            </el-table-column>-->
            <el-table-column
              prop="contact"
              label="联系人"
              width="120"
              align="center">
            </el-table-column>
            <el-table-column
              prop="contactMobile"
              label="联系电话"
              width="180"
              align="center">
            </el-table-column>
            <el-table-column
              prop="clientState"
              label="商户状态"
              width="120"
              align="center">
              <template slot-scope="scope">
                <span v-if="scope.row.clientState == 'NORMAL'" >正常</span>
                <span v-else-if="scope.row.clientState == 'LOCKED'" >锁定</span>
                <span v-else >冻结</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="state"
              label="审核状态"
              width="130"
              align="center">
              <template slot-scope="scope">
                <span v-if="scope.row.state == 'FAILED'" >审核失败</span>
                <span v-else-if="scope.row.state == 'SUCCESS'" >审核成功</span>
                <span v-else-if="scope.row.state == 'ING'" >审核中</span>
                <span v-else >初始</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="remitSwitch"
              label="代付开关"
              width="130"
              align="center">
              <template slot-scope="scope">
                <span v-if="scope.row.remitSwitch == 'open'">开启</span>
                <span v-else>关闭</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="remitBackSwitch"
              label="代付后台开关"
              width="130"
              align="center">
              <template slot-scope="scope">
                <span v-if="scope.row.remitBackSwitch == 'open'">开启</span>
                <span v-else>关闭</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="remitApiSwitch"
              label="代付接口开关"
              width="150"
              align="center">
              <template slot-scope="scope">
                <span v-if="scope.row.remitApiSwitch == 'open'">开启</span>
                <span v-else>关闭</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="amountTotal"
              label="总收益(元)"
              width="180"
              align="center">
            </el-table-column>
            <el-table-column
              prop="amountAvailable"
              label="可用金额(元)"
              width="180"
              align="center">
            </el-table-column>
            <el-table-column
              prop="amountCash"
              label="提现金额(元)"
              width="180"
              align="center">
            </el-table-column>
            <el-table-column
              prop="createDate"
              label="创建时间"
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
import { commercialTenantList } from '@/JS/getData'

export default {
  name: 'MerchantList',
  data () {
    return {
      page: {
        currentPage: 1,
        total: 10
      },
      params: {
        pageNumber: 1, // 页数
        pageSize: 8, // 每页显示条数
        total: 10 // 总条数
      },
      tableData: [],
      remitSwitchOptions: [
        {value: '', label: '全部'},
        {value: 'open', label: '开启'},
        {value: 'close', label: '关闭'}
      ],
      MerchantsStatus: [
        {value: '', label: '全部'},
        {value: 'NORMAL', label: '正常'},
        {value: 'LOCKED', label: '锁定'},
        {value: 'FREEZE', label: '冻结'}
      ],
      auditStatus: [
        {value: '', label: '全部'},
        {value: 'FAILED', label: '审核失败'},
        {value: 'SUCCESS', label: '审核成功'},
        {value: 'ING', label: '审核中'},
        {value: 'INIT', label: '初始'}
      ],
      value: '',
      date1: null
    }
  },
  methods: {
    getOrderList () {
      commercialTenantList(this.params)
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
