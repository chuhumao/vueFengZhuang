<template>
    <div>
      <div class="selectText">
        <i></i>
        <span>用户信息</span>
      </div>
      <ul class="infoContent">
        <li>
          <p><img src="../../assets/info/AgrentJiben.png" height="100" width="100"/></p>
          <h2>基本信息</h2>
          <p>代理名称：{{ baseMap.name }}</p>
          <p>联系电话：{{ baseMap.mobile }}</p>
          <p>支付密码：{{ baseMap.isPay?'已设置' : '未设置' }}</p>
          <p>谷歌验证器：{{ baseMap.isGoogle?'已绑定' : '未绑定' }}</p>
        </li>
        <li>
          <p><img src="../../assets/info/AgrentTixian.png" height="100" width="100"/></p>
          <h2>提现信息</h2>
          <p>可用金额：{{ cashMap.amountValid }}</p>
          <p>冻结金额：{{ cashMap.amountFreeze }}</p>
        </li>
        <li>
          <p><img src="../../assets/info/AgrentCunkuan.png" height="100" width="100"/></p>
          <h2>存款信息(支付)</h2>
          <p>最近一小时订单：{{ payMap.hourNum }}</p>
          <p>最近一小时订单金额(单位分)：{{ payMap.hourAmount }}</p>
          <p>当天订单量：{{ payMap.dayNum }}</p>
        </li>
        <li>
          <p><img src="../../assets/info/AgrentChukuan.png" height="100" width="100"/></p>
          <h2>出款信息(代付)</h2>
          <p>最近一小时订单金额(单位分)：{{ remitMap.hourNum }}</p>
          <p>最近一小时订单金额(单位分)：{{ remitMap.hourAmount }}</p>
          <p>当天订单量：{{ remitMap.dayNum }}</p>
        </li>
      </ul>
    </div>
</template>

<script>
import { infoUserContent } from '@/JS/getData'
export default {
  name: 'information',
  data () {
    return {
      baseMap: {}, // 基本信息
      cashMap: {}, // 提现信息
      payMap: {}, // 存款信息(支付)
      remitMap: {} // 出款信息(代付)
    }
  },
  methods: {
    infoContent () {
      infoUserContent()
        .then(res => {
          console.log(res)
          this.baseMap = res.data.baseMap
          this.cashMap = res.data.cashMap
          this.payMap = res.data.payMap
          this.remitMap = res.data.remitMap
        })
    }
  },
  created () {
    this.infoContent()
  }
}
</script>

<style scoped lang="less">
  @import "../../Css/public";
  .infoContent{
    width: 100%;
    li{
      width:21%;
      height:340px;
      float:left;
      box-sizing: border-box;
      padding:20px;
      border:1px solid #E6E6E6;
      margin-right:40px;
      margin-top:10px;
      p{
        margin:20px 0;
      }
    }
  }
</style>
