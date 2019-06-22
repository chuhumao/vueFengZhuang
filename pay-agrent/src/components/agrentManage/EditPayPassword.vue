<template>
  <div>
    <el-card class="box-card">
      <div class="selectText">
        <i></i>
        <span>修改支付密码</span>
      </div>
      <el-form :model="params" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm ">
        <el-form-item label="旧支付密码" prop="oldPassword" class="el-col-13">
          <el-input type="password" v-model="params.oldPassword" placeholder="请输入旧支付密码" maxlength="32"></el-input>
        </el-form-item>
        <el-form-item label="新支付密码" prop="newPassword" class="el-col-13">
          <el-input type="password" v-model="params.newPassword" placeholder="请输入新支付密码" maxlength="32" @blur="contrastPassworde"></el-input>
        </el-form-item>
        <el-form-item label="确认支付密码" prop="newPassword2" class="el-col-13">
          <el-input type="password" v-model="params.newPassword2" placeholder="请输入确认支付密码" maxlength="32"></el-input>
        </el-form-item>
        <br />
        <div class="el-col-13 marginTop textAlignRight">
          <el-button type="primary" @click="editAgrent('ruleForm')">确定</el-button>
          <el-button type="warning" @click="reset">重置</el-button>
        </div>
        <div class="clear"></div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { agrentEditPayPassworde } from '@/JS/getData'
export default {
  name: 'EditPayPassword',
  data () {
    return {
      params: {},
      rules: {
        oldPassword: [{ required: true, message: '请输入旧支付密码', trigger: 'blur' }],
        newPassword: [{ required: true, message: '请输入新支付密码', trigger: 'blur' }],
        newPassword2: [{ required: true, message: '请输入新支付密码确认输入', trigger: 'blur' }]
      }
    }
  },
  methods: {
    editAgrent (val) {
      console.log(val)
      this.$refs[val].validate((valid) => {
        if (valid) {
          agrentEditPayPassworde(this.params)
            .then(res => {
              if (res.code == 200) {
                this.$message.success(res.message)
              } else this.$message.error(res.message)
            })
        }
      })
    },
    contrastPassworde () {
      if (this.params.oldPassword === this.params.newPassword) {
        this.$message.error('旧密码与新密码相似')
      }
    },
    reset () {
      this.params = {}
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../Css/public";

</style>
