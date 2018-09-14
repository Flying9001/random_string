//index.js
var common = require("../../utils/common.js");
//获取应用实例
const app = getApp()

Page({
  data: {
    randommessageup: "",
    randommessagedown: ""
  },
  /**
   * 界面加载时触发
   */
  onLoad: function(){
    var randomStrUp = common.getRandomStr(16);
    var randomStrDown = common.getRandomStrWithSymbol(16);
    this.setData({
      randommessageup: randomStrUp,
      randommessagedown: randomStrDown
    });
  },
  /**
   * 获取固定位数随机字符串
   * 不包含符号
   */
  getRandomStr: function(){
    var randomStr = common.getRandomStr(16);
    this.setData({
      randommessageup: randomStr
      });
  },
  /**
   * 获取固定位数随机字符串
   * 包含符号
   */
  getRandomStrWithSymbol: function () {
    var randomStr = common.getRandomStrWithSymbol(16);
    this.setData({
      randommessagedown: randomStr
    });
  },
  /**
   * 复制生成的字符串
   * 不包含字符
   */
  copyUp: function(){
    wx.setClipboardData({
        data: this.data.randommessageup,
    })
  },
  /**
   * 复制生成的字符串
   * 包含字符
   */
  copyDown: function () {
    wx.setClipboardData({
        data: this.data.randommessagedown,
    })
  },
  /**
   * 小程序分享设置
   */
  onShareAppMessage: function () {
    return {
      title: '随机字符生成工具',
      desc: '简洁、实用的字符生成工具',
      path: '/pages/index/index'
    }
  },

  
})
