<template>
    <div>
      <el-card class="box-card">
        <div class="selectText">
          <i></i>
          <span>基本信息</span>
        </div>
        <!--展示信息-->
        <div class="el-col-12 infoContent">
          <span>代理商名称：</span>
          <div>{{ params.name }}</div>
        </div>
        <div class="el-col-12 infoContent">
          <span>联系电话：</span>
          <div>{{ params.mobile }}</div>
        </div>
        <!--<div class="el-col-12 infoContent">
          <span>审核状态：</span>
          <div v-if="params.state == 'INIT'">初始</div>
          <div v-else-if="params.state == 'VALID'">可用</div>
          <div v-else>不可用</div>
        </div>-->
        <div class="el-col-12 infoContent">
          <span>代理商状态：</span>
          <div v-if="params.loginState == 'FREEZE'">冻结</div>
          <div v-else-if="params.loginState == 'LOCKED'">锁定</div>
          <div v-else>正常</div>
        </div>
        <div class="el-col-12 infoContent">
          <span>登入帐号：</span>
          <div>{{ params.loginName }}</div>
        </div>
        <div class="el-col-12 infoContent">
          <span>交易总额(元)：</span>
          <div>{{ params.amountTotal }}</div>
        </div>
        <div class="el-col-12 infoContent">
          <span>可用金额(元)：</span>
          <div>{{ params.amountValid }}</div>
        </div>
        <div class="el-col-12 infoContent">
          <span>提现金额(元)：</span>
          <div>{{ params.amountCash }}</div>
        </div>
      </el-card>
    </div>
</template>

<script>
import { userMessage } from '@/JS/getData'
export default {
  name: 'BasicInfo',
  data () {
    return {
      params: {}
    }
  },
  methods: {
    gerUserList () {
      userMessage()
        .then(res => {
          console.log(res)
          this.params = res.data
        })
    }
  },
  mounted () {
    this.gerUserList()
  }
}
</script>

<style scoped lang="less">
  @import "../../Css/public";
  .infoContent{
    line-height:24px;
    text-indent:40px;
    margin:20px 0;
    span{
      display: inline-block;
      float:left;
      font-size:18px;
    }
    div{
      float:left;
      font-size:18px;
    }
  }
</style>
