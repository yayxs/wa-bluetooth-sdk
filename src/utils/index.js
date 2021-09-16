/**
 * @docs https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html
 * Polyfill 低版本兼容
 * 基础库 1.1.0 开始支持，低版本需做兼容处理
 * @param {Function} fn wx.openBluetoothAdapter
 * @returns {}
 */
export function polyfillFunc(fn) {
  if (!fn) {
    if (wx.showModal) {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。',
      })
    }
    return
  }
}
