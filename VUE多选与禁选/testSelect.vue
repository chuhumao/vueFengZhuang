<template>
  <div>
    <!--移交异常-->
    <div class="anomalyError">
      <div class="anomalyErrorOne">移交异常：</div>
      <div class="anomalyErrorTwo">
        <el-checkbox v-model="checkParams.hException1" true-label="广发未办理盖章" label="广发未办理盖章" :disabled="disYj" @change="selectDis"></el-checkbox>
        <el-checkbox v-model="checkParams.hException2" true-label="未打印签署" label="未打印签署" :disabled="disYj" @change="selectDis"></el-checkbox>
      </div>
      <div class="anomalyErrorThree ErrorCenter">达标措施</div>
      <div class="anomalyErrorThree ErrorCenter">补救措施</div>
      <span class="clear"></span>
    </div>
    <!--合同遗失-A类-->
    <div class="anomalyErrorOnceTwo">
      <div class="anomalyErrorOne">合同遗失-A类：</div>
      <!--1-->
      <div>
        <div class="anomalyErrorTwo">
          <el-checkbox @change="selectDis" v-model="checkParams.hException3" true-label="(A1)合同各方已盖章，且已履行完毕" label="(A1)合同各方已盖章，且已履行完毕" :disabled="disHtOne"></el-checkbox>
        </div>
        <div class="anomalyErrorThree">
          <el-checkbox ref="checkBosOne" @change="selectDis" v-model="checkParams.upStandard2" true-label="已补签履行完毕" label="已补签" :disabled="disHtOneTwo"></el-checkbox>
        </div>
        <div class="anomalyErrorThree">
          <el-checkbox ref="checkBosTwo" @change="selectDis" v-model="checkParams.remedial2" true-label="已有遗失说明" label="已有遗失说明" :disabled="disHtOneTwo"></el-checkbox>
        </div>
      </div>
      <!--2-->
      <div style="height: 79px;">
        <div class="anomalyErrorTwo">
          <el-checkbox @change="selectDis" v-model="checkParams.hException4" true-label="(A2)合同各方已盖章，且正在履行" label="(A2)合同各方已盖章，且正在履行" :disabled="disHtTwo"></el-checkbox>
          <el-checkbox @change="selectDisTwo" v-model="checkParams.zlhDateOne" true-label="自留函" label="自留函" :disabled="disHtTwoOnce"></el-checkbox>
          <el-date-picker
            class="pickerSelect"
            v-show="disHtTwoDate"
            v-model="checkParams.zlhDate"
            :picker-options="timeChange"
            type="date"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
            placeholder="选择时间">
          </el-date-picker>
        </div>
        <div class="anomalyErrorThree" style="line-height: 79px;">
          <el-checkbox ref="checkBosThree" @change="selectDis" v-model="checkParams.upStandard3" true-label="已补签正在履行" label="已补签" :disabled="disHtTwoTwo"></el-checkbox>
        </div>
        <div class="anomalyErrorThree ErrorCenter"  style="line-height: 79px;">——</div>
      </div>
      <!--3-->
      <div>
        <div class="anomalyErrorTwo">
          <el-checkbox @change="selectDis" v-model="checkParams.hException5" true-label="(A3)合同各方已盖章，合同不再履行" label="(A3)合同各方已盖章，合同不再履行"  :disabled="disHtThree"></el-checkbox>
        </div>
        <div class="anomalyErrorThree">
          <el-checkbox ref="checkBosFour" @change="selectDis" v-model="checkParams.upStandard5" true-label="已变更、解除、终止" label="已变更、解除、终止"  :disabled="disHtThreeTwo"></el-checkbox>
        </div>
        <div class="anomalyErrorThree ErrorCenter">——</div>
      </div>
      <!--4-->
      <div>
        <div class="anomalyErrorTwo">
          <el-checkbox @change="selectDis" v-model="checkParams.hException6" true-label="(A4)合同仅有我方盖章" label="(A4)合同仅有我方盖章" :disabled="disHtFour"></el-checkbox>
        </div>
        <div class="anomalyErrorThree">
          <el-checkbox ref="checkBosFive" @change="selectDis" v-model="checkParams.upStandard6" true-label="已全部回收" label="已全部回收" :disabled="disHtFourTwo"></el-checkbox>
        </div>
        <div class="anomalyErrorThree">
          <el-checkbox ref="checkBosSix" @change="selectDis" v-model="checkParams.remedial6" true-label="已有遗失说明" label="已有遗失说明" :disabled="disHtFourTwo"></el-checkbox>
        </div>
      </div>
      <span class="clear"></span>
    </div>
    <!--合同不完整-B类-->
    <div class="anomalyErrorOnceTwo">
      <div class="anomalyErrorOnceFour">合同不完整-B类：</div>
      <div>
        <div class="anomalyErrorOnceThree">
          <el-checkbox  v-model="checkParams.contentOne" true-label="原件不完整（对方未盖章）" label="原件不完整（对方未盖章）" :disabled="disHtBOne" @change="selectDis"></el-checkbox>
        </div>
        <div class="anomalyErrorOnceThree">
          <el-checkbox  v-model="checkParams.contentTwo" true-label="原件不完整（无签署时间）" label="原件不完整（无签署时间）" :disabled="disHtBTwo" @change="selectDis"></el-checkbox>
        </div>
        <div class="anomalyErrorOnceThree">
          <el-checkbox  v-model="checkParams.contentThree" true-label="原件不完整（缺失授权书）" label="原件不完整（缺失授权书）" :disabled="disHtBThree" @change="selectDis"></el-checkbox>
        </div>
        <div class="anomalyErrorOnceThree">
          <el-checkbox  v-model="checkParams.contentFour" true-label="原件不完整（对方未签名）" label="原件不完整（对方未签名）" :disabled="disHtBFour" @change="selectDis"></el-checkbox>
        </div>
        <div class="anomalyErrorOnceThree">
          <el-checkbox  v-model="checkParams.contentFive" true-label="原件不完整（缺失部分页）" label="原件不完整（缺失部分页）" :disabled="disHtBFive" @change="selectDis"></el-checkbox>
        </div>
      </div>
      <div class="anomalyErrorOnceFour" style="width: 234px; text-align: left; text-indent: 2px;">
        <el-checkbox ref="checkBosSeven" v-model="checkParams.upStandard7" true-label="补充整改完成后原件归档" label="补充整改完成后原件归档" :disabled="disHtBOnceTwo" @change="selectDis"></el-checkbox>
      </div>
      <div class="anomalyErrorThree ErrorCenter"  style="height: 204px;line-height: 204px;">——</div>
      <span class="clear"></span>
    </div>
    <br/>
    <div slot="footer" class="dialog-footer all-btn" style="margin-top: -18px;">
      <el-button type="primary" @click="errorCheckBtn">确定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'testSelect',
  data () {
    return {
      checkList: [],
      checkedOne: '',
      checkParams: {},
      disYj: false,
      disHtOne: false,
      disHtOneTwo: true,
      disHtTwo: false,
      disHtTwoOnce: false,
      disHtTwoDate: false,
      disHtTwoTwo: true,
      disHtThree: false,
      disHtThreeTwo: true,
      disHtFour: false,
      disHtFourTwo: true,

      disHtBOne: false,
      disHtBTwo: false,
      disHtBThree: false,
      disHtBFour: false,
      disHtBFive: false,
      disHtBOnceTwo: true,
      timeChange: {
        disabledDate (time) {
          return time.getTime() < (Date.now() - 3600 * 1000 * 24 * 183) || time.getTime() > Date.now() // 选择时间范围
        }
      },
    }
  },
  methods: {
    errorCheckBtn () {
      console.log(this.$refs.checkBosSeven)
    },
    selectDis (val) {
      if (this.checkParams.hException1 == '广发未办理盖章' || this.checkParams.hException2 == '未打印签署') {
        this.disYj = false
        this.disHtOne = true
        this.disHtOneTwo = true
        this.disHtTwo = true
        this.disHtTwoOnce = true
        this.disHtTwoTwo = true
        this.disHtThree = true
        this.disHtThreeTwo = true
        this.disHtFour = true
        this.disHtFourTwo = true
        this.disHtBOne = true
        this.disHtBTwo = true
        this.disHtBThree = true
        this.disHtBFour = true
        this.disHtBFive = true
        this.disHtBOnceTwo = true
      }
      else if (this.checkParams.hException3 == '(A1)合同各方已盖章，且已履行完毕') {
        this.disYj = true
        this.disHtOne = false
        this.disHtOneTwo = false
        this.disHtTwo = true
        this.disHtTwoOnce = true
        this.disHtTwoTwo = true
        this.disHtThree = true
        this.disHtThreeTwo = true
        this.disHtFour = true
        this.disHtFourTwo = true
        this.disHtBOne = true
        this.disHtBTwo = true
        this.disHtBThree = true
        this.disHtBFour = true
        this.disHtBFive = true
        this.disHtBOnceTwo = true
      }
      else if (this.checkParams.hException4 == '(A2)合同各方已盖章，且正在履行') {
        this.disYj = true
        this.disHtOne = true
        this.disHtOneTwo = true
        this.disHtTwo = false
        this.disHtTwoOnce = true
        this.disHtTwoTwo = false
        this.disHtThree = true
        this.disHtThreeTwo = true
        this.disHtFour = true
        this.disHtFourTwo = true
        this.disHtBOne = true
        this.disHtBTwo = true
        this.disHtBThree = true
        this.disHtBFour = true
        this.disHtBFive = true
        this.disHtBOnceTwo = true
      }
      else if (this.checkParams.hException5 == '(A3)合同各方已盖章，合同不再履行') {
        this.disYj = true
        this.disHtOne = true
        this.disHtOneTwo = true
        this.disHtTwo = true
        this.disHtTwoOnce = true
        this.disHtTwoTwo = true
        this.disHtThree = false
        this.disHtThreeTwo = false
        this.disHtFour = true
        this.disHtFourTwo = true
        this.disHtBOne = true
        this.disHtBTwo = true
        this.disHtBThree = true
        this.disHtBFour = true
        this.disHtBFive = true
        this.disHtBOnceTwo = true
      }
      else if (this.checkParams.hException6 == '(A4)合同仅有我方盖章') {
        this.disYj = true
        this.disHtOne = true
        this.disHtOneTwo = true
        this.disHtTwo = true
        this.disHtTwoOnce = true
        this.disHtTwoTwo = true
        this.disHtThree = true
        this.disHtThreeTwo = true
        this.disHtFour = false
        this.disHtFourTwo = false
        this.disHtBOne = true
        this.disHtBTwo = true
        this.disHtBThree = true
        this.disHtBFour = true
        this.disHtBFive = true
        this.disHtBOnceTwo = true
      }
      else if (
        this.checkParams.contentOne == '原件不完整（对方未盖章）' ||
        this.checkParams.contentTwo == '原件不完整（无签署时间）' ||
        this.checkParams.contentThree == '原件不完整（缺失授权书）' ||
        this.checkParams.contentFour == '原件不完整（对方未签名）' ||
        this.checkParams.contentFive == '原件不完整（缺失部分页）'
      ) {
        this.disYj = true
        this.disHtOne = true
        this.disHtOneTwo = true
        this.disHtTwo = true
        this.disHtTwoOnce = true
        this.disHtTwoTwo = true
        this.disHtThree = true
        this.disHtThreeTwo = true
        this.disHtFour = true
        this.disHtFourTwo = true
        this.disHtBOne = false
        this.disHtBTwo = false
        this.disHtBThree = false
        this.disHtBFour = false
        this.disHtBFive = false
        this.disHtBOnceTwo = false
      }
      else if (
        this.checkParams.hException1 == undefined &&
        this.checkParams.hException2 == undefined &&
        this.checkParams.hException3 == undefined &&
        this.checkParams.hException4 == undefined &&
        this.checkParams.zlhDateOne == undefined
      ) {
        this.$refs.checkBosOne.model = false
        this.$refs.checkBosTwo.model = false
        this.$refs.checkBosThree.model = false
        this.$refs.checkBosFour.model = false
        this.$refs.checkBosFive.model = false
        this.$refs.checkBosSix.model = false
        this.$refs.checkBosSeven.model = false
        this.disCheckAbel()
      }
      // else if (this.checkParams.hException3 == undefined && this.checkParams.remedial2 == undefined && this.checkParams.upStandard2 == undefined) {
      //   console.log(22);
      //   this.disCheckAbel()
      // }
      else if (
        this.checkParams.hException4 == undefined &&
        this.checkParams.upStandard3 == undefined &&
        this.checkParams.zlhDateOne == undefined &&
        this.checkParams.zlhDate == undefined) {
        console.log(1);
        this.disCheckAbel()
      }
    },
    selectDisTwo (val) {
      if (this.checkParams.zlhDateOne == '自留函') {
        this.$message.info('请于出具自留函之日起6个月内完成全部合同归档，到期未完成将纳入合同异常归档考核！')
        this.disYj = true
        this.disHtOne = true
        this.disHtOneTwo = true
        this.disHtTwo = true
        this.disHtTwoOnce = false
        this.disHtTwoTwo = false

        this.disHtTwoDate = true

        this.disHtThree = true
        this.disHtThreeTwo = true
        this.disHtFour = true
        this.disHtFourTwo = true
        this.disHtBOne = true
        this.disHtBTwo = true
        this.disHtBThree = true
        this.disHtBFour = true
        this.disHtBFive = true
        this.disHtBOnceTwo = true
      }
      else if (
        this.checkParams.hException1 == undefined &&
        this.checkParams.hException2 == undefined &&
        this.checkParams.hException3 == undefined &&
        this.checkParams.hException4 == undefined &&
        this.checkParams.zlhDateOne == undefined
      ) {
        this.$refs.checkBosOne.model = false
        this.$refs.checkBosTwo.model = false
        this.$refs.checkBosThree.model = false
        this.$refs.checkBosFour.model = false
        this.$refs.checkBosFive.model = false
        this.$refs.checkBosSix.model = false
        this.$refs.checkBosSeven.model = false
        this.disCheckAbel()
      }
      /*else {
        this.disYj = false
        this.disHtOne = false
        this.disHtOneTwo = false
        this.disHtTwo = false
        this.disHtTwoTwo = false
        this.disHtThree = false
        this.disHtThreeTwo = false
        this.disHtFour = false
        this.disHtFourTwo = false
        this.disHtBOne = false
        this.disHtBTwo = false
        this.disHtBThree = false
        this.disHtBFour = false
        this.disHtBFive = false
        this.disHtBOnceTwo = false
        this.disHtTwoDate = false
      }*/
    },
    disCheckAbel () {
      this.disYj = false
      this.disHtOne = false
      this.disHtOneTwo = true
      this.disHtTwo = false
      this.disHtTwoOnce = false
      this.disHtTwoDate = false
      this.disHtTwoTwo = true
      this.disHtThree = false
      this.disHtThreeTwo = true
      this.disHtFour = false
      this.disHtFourTwo = true
      this.disHtBOne = false
      this.disHtBTwo = false
      this.disHtBThree = false
      this.disHtBFour = false
      this.disHtBFive = false
      this.disHtBOnceTwo = true
      this.checkParams = {}
    }
  }
}
</script>

<style scoped lang="less">
  @import "../css/public";
.anomalyError{
  width: 993px;
  border: 1px solid;
  >div{
    float:left;
    border:1px solid;
    height: 40px;
    line-height: 40px;
  }
  .anomalyErrorOne{
    width: 182px;
    text-align: right;
  }
  .anomalyErrorTwo{
    text-indent: 2px;
    width: 333px;
    /deep/.el-checkbox__label{
      padding-top: 2px;
      font-size: 16px;
    }
  }
  .anomalyErrorThree{
    width: 235px;
    text-indent: 2px;
    /deep/.el-checkbox__label{
      padding-top: 2px;
      font-size: 16px;
    }
  }
}
.ErrorCenter{
  text-align: center;
}
.anomalyErrorOnceTwo{
  width: 993px;
  font-size: 20px;
  border: 1px solid;
  >div{
    float:left;
    border:1px solid;
    height: 40px;
  }
  .anomalyErrorOne{
    width: 182px;
    height: 205px;
    line-height: 205px;
    text-align: right;
  }
  .anomalyErrorTwo{
    float: left;
    width: 333px;
    height: 100%;
    text-indent: 2px;
    line-height: 40px;
    border: 1px solid;
    /deep/.el-checkbox__label{
      padding-top: 2px;
      font-size: 16px;
    }
  }
  .anomalyErrorThree{
    float: left;
    width: 234px;
    height: 100%;
    text-indent: 2px;
    line-height: 40px;
    border: 1px solid;
    /deep/.el-checkbox__label{
      padding-top: 2px;
      font-size: 16px;
    }
  }
  .anomalyErrorOnceThree{
    width: 333px;
    height: 39px;
    text-indent: 2px;
    line-height: 40px;
    border: 1px solid;
    /deep/.el-checkbox__label{
      padding-top: 2px;
      font-size: 16px;
    }
  }
  .anomalyErrorOnceFour{
    width: 182px;
    height: 204px;
    line-height: 204px;
    text-align: right;
  }
  .pickerSelect{
    width: 190px;
    /deep/.el-input__inner{
      height: 28px;
    }
  }
}
</style>
