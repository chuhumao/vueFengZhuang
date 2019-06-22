<template>
    <div class="login-background">
      <!--<div class="login-img">
        <img src="@/assets/Login/AgrentBanner.png"/>
      </div>-->
      <div class="login-box">
        <h3 class="login-agrentMage">代理商后台管理</h3>
        <div class="login-input">
          <el-form :model="ruleForm" :rules="rules" ref="form" class="demo-ruleForm">
            <el-form-item prop="name">
              <span><img src="../assets/Login/AgrentName.png" height="28" width="28"/></span>
              <el-input v-model="ruleForm.name" placeholder="请输入登录名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <span><img src="../assets/Login/AgrentPassword.png" height="28" width="23"/></span>
              <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <!--<el-form-item prop="password">
              <span><img src="../assets/Login/AgrentZhanghao.png" height="21" width="27"/></span>
              <el-select v-model="ruleForm.childrenUser" placeholder="子账号">
                <el-option
                  v-for="item in childrenUserList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>-->
            <el-form-item prop="code" styke="margin-left:4px;" style="border-bottom: none!important;">
              <div style="width: 72%;height: 100%;float: left;border-bottom:1px solid #F5F5F5">
                <span><img src="../assets/Login/AgrentZhanghao.png" height="21" width="27"/></span>
                <el-input v-model="ruleForm.code" placeholder="请输入验证码" style="width: 60%;"></el-input>
              </div>
              <div class="verificationCode" @click="cid">
                <img :src="cidNumber" alt="" style="width: 100%;height: 100%;">
              </div>
            </el-form-item>
            <el-form-item class="login-AgrentBtn">
              <div  @click="submitLogin('form')" @keyup.enter.native="submitLogin('form')" style="display:block;width: 100%;height: 100%">登录</div>
              <!--<el-button type="primary" >登录</el-button>-->
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
</template>

<script>
import { userLogin, captcha } from '@/JS/getData'
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      ruleForm: {
        cid: null
      },
      childrenUserList: [],
      cidNumber: null,
      rules: {
        name: [{ required: true, message: '请输入登录名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        code: [{required: true, message: '请输入验证码', trigger: 'blur'}]
      }
    }
  },
  methods: {
    submitLogin (val) {
      this.$refs[val].validate((valid) => {
        if (valid) {
          userLogin(this.ruleForm)
            .then(res => {
              if (res.code == 200) {
                this.$message.success(res.message)
                sessionStorage.setItem('user_token', res.data.token)
                sessionStorage.setItem('user_name', res.data.name)
                this.$router.push({path: '/information/information'})
              } else {
                this.$message.error(res.message)
                if (res.message == '验证码不正确！') {
                  this.cid()
                }
              }
            })
        }
      })
    },
    resetForm () {

    },
    cid () {
      let oneNumber = Math.floor(Math.random() * 20)
      this.ruleForm.cid = oneNumber
      axios({
        url: 'http://39.108.123.109:12000/payment/agent/captcha?cid=' + oneNumber,
        method: 'get'
      })
      /* captcha({cid:oneNumber}) */
        .then(res => {
          this.cidNumber = res.config.url
        })
    }
  },
  created () {
    this.cid()
  }
}
</script>

<style scoped lang="less">
@import "../Css/login.less";
.login-AgrentBtn{
  cursor: pointer;
 /* background: url("../assets/Login/AgrenBtn.png") no-repeat;
  background-size:100% 66px;*/
  div{
    background-color:#357CE1;
    border-radius:20px;
  }
}
</style>
