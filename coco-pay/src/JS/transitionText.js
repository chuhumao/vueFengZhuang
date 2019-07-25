const valueIndex = function () {
  return {
    mecharList: function (val, valDate) {
      for (let i = val.length - 1; i >= 0; i--) {
        let valIndex = Math.floor(Math.random() * (i + 1)) // 获取到随机的下标;
        let responeIndex = val[valIndex]
        val[valIndex] = val[i]
        val[i] = responeIndex
      }
      return val
    }
  }
}

export {
  valueIndex
}
