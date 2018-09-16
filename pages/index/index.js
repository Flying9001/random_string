//index.js
const common = require("../../utils/common.js");
const updateManager = wx.getUpdateManager();
/** 自定义长度 */
const lengths = [];
//获取应用实例
const app = getApp()

for(let i = 8; i <=20; i++){
  lengths.push(i);
}

Page({
  data: {
    randommessageup: "",
    randommessagedown: "",
    lengths: lengths,
    length: 16
  },
  /**
   * 界面加载时触发
   */
  onLoad: function(){
    var randomStrUp = common.getRandomStr(this.data.length);
    var randomStrDown = common.getRandomStrWithSymbol(this.data.length);
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
    var randomStr = common.getRandomStr(this.data.length);
    this.setData({
      randommessageup: randomStr
      });
  },
  /**
   * 获取固定位数随机字符串
   * 包含符号
   */
  getRandomStrWithSymbol: function () {
    var randomStr = common.getRandomStrWithSymbol(this.data.length);
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
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      length: this.data.lengths[val[0]]
    })
  },
  /**
  * 小程序分享设置
  */
  onShareAppMessage: function () {
    return {
      title: '随机字符生成工具',
      path: '/pages/index/index',
      imageUrl: 'https://upload-images.jianshu.io/upload_images/4412479-8c909d5ac1fdcfab.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240'
    }
  },

  
})
