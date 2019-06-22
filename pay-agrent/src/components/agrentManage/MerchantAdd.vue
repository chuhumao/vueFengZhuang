<template>
    <div>
      <el-card class="box-card">
        <div class="selectText">
          <i></i>
          <span>商户添加</span>
        </div>
        <el-form :model="params" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="商户名称" prop="name" class="el-col-12">
            <el-input v-model="params.name" placeholder="请输入商户名称"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="contactEmail" class="el-col-12">
            <el-input v-model="params.contactEmail" placeholder="请输入邮箱"></el-input>
          </el-form-item>
          <el-form-item label="联系人" prop="contact" class="el-col-12">
            <el-input v-model="params.contact" placeholder="请输入联系人"></el-input>
          </el-form-item>
          <el-form-item label="绑定手机" prop="contactMobile" class="el-col-12">
            <el-input v-model="params.contactMobile" placeholder="请输入绑定手机" maxlength="11"></el-input>
          </el-form-item>
          <el-form-item label="平台网址" prop="webAddress" class="el-col-12">
            <el-input v-model="params.webAddress" placeholder="请输入平台网址（包含网络协议 http 或 https）"></el-input>
          </el-form-item>
          <br />
          <div class="el-col-24 marginTop">
            <el-button type="primary" @click="addAgrent('ruleForm')">添加</el-button>
            <el-button type="warning" @click="reset">重置</el-button>
          </div>
          <div class="clear"></div>
        </el-form>
      </el-card>
    </div>
</template>

<script>
import { agrentAdd } from '@/JS/getData'
export default {
  name: 'MerchantAdd',
  data () {
    const validaPhone = (rule, value, callback) => {
      var patrn = /^1[3456789]\d{9}$/
      if (!patrn.test(value)) {
        callback(new Error('请输入正确的手机号码'))
      } else {
        callback()
      }
    }

    const validaEmail = (rule, value, callback) => {
      var patrn = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
      if (!patrn.test(value)) {
        callback(new Error('请输入正确的邮箱'))
      } else {
        callback()
      }
    }

    return {
      params: {},
      rules: {
        name: [{ required: true, message: '请输入商户名称', trigger: 'blur' }],
        contactEmail: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          {validator: validaEmail, trigger: 'blur'}
        ],
        contact: [{ required: true, message: '请输入联系人', trigger: 'blur' }],
        contactMobile: [
          { required: true, message: '请输入绑定手机', trigger: 'blur' },
          // { max: 11, min: 11, required: true, message: '请输入正确的手机号码', trigger: 'blur' },
          {validator: validaPhone, trigger: 'blur'}
        ],
        webAddress: [{ required: true, message: '请输入平台网址', trigger: 'blur' }]
      }
    }
  },
  methods: {
    addAgrent (val) {
      console.log(val)
      this.$refs[val].validate((valid) => {
        if (valid) {
          agrentAdd(this.params)
            .then(res => {
              console.log(res)
              if (res.code == 200) {
                this.$message.success(res.message)
                this.$router.push({name: 'MerchantList'})
              } else this.$message.error(res.message)
            })
        }
      })
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
