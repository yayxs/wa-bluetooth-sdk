// import { polyfillFunc } from './utils/index'
// let globalTimerId = null // 全局timerId标记

// /**
//  * 0关闭蓝牙适配器
//  * 1打开蓝牙适配器
//  * 2开始发现设备
//  * 3监听扫描结果
//  * 4通过蓝牙名字开扫描
//  * 5扫描到设备开始连接
//  * @param {number} 5 单位 s 5*1000
//  */
// export async function reallyScanConnect(time) {
//   console.log(arguments)
//   // 兼容关键func
//   polyfillFunc(wx.openBluetoothAdapter)
//   let ret = {} // 结果设备对象
//   let foundDevs = [] // 找到的设备数组
//   // 关闭蓝牙适配 默认是成对出现
//   // wx.closeBluetoothAdapter()
//   try {
//     const res = wx.openBluetoothAdapter()
//     console.log(res)
//   } catch (error) {
//     console.log(error)
//   }
//   // 设置定时器
//   globalTimerId = setTimeout(() => {
//     // 停止发现
//     wx.stopBluetoothDevicesDiscovery()
//     // 关闭适配器
//     wx.closeBluetoothAdapter()
//   })
// }

// reallyScanConnect(5)

console.log(123)

export function testNpm() {
  wx.showModal({
    title: '提示',
    content: 'npm success',
  })
}
