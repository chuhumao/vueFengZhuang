<template>
    <div class="login-background">
      <div class="login-img">
        <img src="@/assets/Login/AgrentBanner.png"/>
      </div>
      <h3 class="login-agrentMage">代理商后台管理</h3>
      <div class="login-input">
        <el-form :model="ruleForm" :rules="rules" ref="form" class="demo-ruleForm">
          <el-form-item prop="name">
            <span><img src="../assets/Login/AgrentName.png" height="28" width="28"/></span>
            <el-input v-model="ruleForm.name" placeholder="请输入登录名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <span><img src="../assets/Login/AgrentPassword.png" height="28" width="23"/></span>
            <el-input v-model="ruleForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <span><img src="../assets/Login/AgrentZhanghao.png" height="21" width="27"/></span>
            <el-select v-model="ruleForm.childrenUser" placeholder="子账号">
              <el-option
                v-for="item in childrenUserList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="password">
            <span><img src="../assets/Login/AgrentZhanghao.png" height="21" width="27"/></span>
            <el-input v-model="ruleForm.verificationCode" placeholder="请输入验证码" style="width: 60%;"></el-input>
            <div class="verificationCode">验证码</div>
          </el-form-item>
          <el-form-item class="login-AgrentBtn">
            <div  @click="submitLogin('form')" style="display:block;width: 100%;height: 100%">登录</div>
            <!--<el-button type="primary" >登录</el-button>-->
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      ruleForm: {},
      childrenUserList: [],
      rules: {
        name: [
          { required: true, message: '请输入登录名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitLogin (val) {
      /* this.$ref[val].validate((valid) => {
        if (valid) {}
      }) */
      // 保存数据
      this.$store.dispatch('setCount', 2)
      this.$router.push({path: '/Home'})
    },
    resetForm () {

    }
  },
  created () {
    this.$router.push({path: '/Home'})
  }
}
</script>

<style scoped lang="less">
@import "../Css/login.less";
.login-AgrentBtn{
  background: url("../assets/Login/AgrenBtn.png") no-repeat;
  background-size:100% 66px;
  :hover{
    cursor: pointer;
  }
}
</style>
