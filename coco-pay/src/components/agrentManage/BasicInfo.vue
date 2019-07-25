<template>
    <div>
      基本信息
      {{ arr }}
    </div>
</template>

<script>
import { valueIndex } from '../../JS/transitionText'
export default {
  name: 'BasicInfo',
  data () {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    }
  },
  created () {
    this.arr = valueIndex().mecharList(this.arr)
    console.log(this.arr)
  }
}
</script>

<style scoped>

</style>
