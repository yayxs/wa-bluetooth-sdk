// index.js
// 获取应用实例

const {testNpm } = require('wa-bluetooth-sdk')
const dayjs = require('dayjs')
Page({
  data: {},
  onLoad() {
    console.log(dayjs().format('YYYY-MM-DD'))
  },
  handleTestNpm(){
    testNpm()
  },
  handleClick() {
    console.log(123)
  },
})
