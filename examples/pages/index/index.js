// index.js
// 获取应用实例
const BigNumber = require('bignumber.js');  //引用
// const app = getApp()

Page({
  data: {},
  onLoad() {},
  handleTestNpm(){
    console.log(BigNumber(2).plus(10))  //使用
  },
  handleClick() {
    console.log(123)
  },
})
