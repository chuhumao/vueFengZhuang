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
          <p>昵称：user</p>
          <p>身份：user</p>
          <p>账号：user</p>
        </li>
        <li>
          <p><img src="../../assets/info/AgrentTixian.png" height="100" width="100"/></p>
          <h2>提现信息</h2>
          <p>提现金额：113939 rmb</p>
          <p>上次提现日期：2019-12-01 18:30:20</p>
        </li>
        <li>
          <p><img src="../../assets/info/AgrentCunkuan.png" height="100" width="100"/></p>
          <h2>提现信息</h2>
          <p>存款金额：113939 rmb</p>
          <p>上次存款日期：2019-12-01 18:30:20</p>
        </li>
        <li>
          <p><img src="../../assets/info/AgrentChukuan.png" height="100" width="100"/></p>
          <h2>出款信息</h2>
          <p>出款金额：113939 rmb</p>
          <p>上次出款日期：2019-12-01 18:30:20</p>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'information'
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
      border:1px solid;
      margin-right:40px;
      p{
        margin:20px 0;
      }
    }
  }
</style>
