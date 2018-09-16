// pages/help/help.js
var px2rpx = 2, windowWidth = 375;
Page({
  data: {
    imageSize: {}
  },
  onLoad: function (options) {
    wx.getSystemInfo({
      success: function (res) {
        windowWidth = res.windowWidth;
        px2rpx = 750 / windowWidth;
      }
    })
  },
  imageLoad: function (e) {
    //单位rpx
    var originWidth = e.detail.width * px2rpx,
      originHeight = e.detail.height * px2rpx,
      ratio = originWidth / originHeight;
    var viewWidth = 700,viewHeight;
    if (originWidth >= viewWidth) {
      //宽度等于viewWidth,只需要求出高度就能实现自适应
      viewHeight = viewWidth / ratio;
    } else {
      //如果宽度小于初始值，这时就不要缩放了
      viewWidth = originWidth;
      viewHeight = originHeight;
    }
    var imageSize = this.data.imageSize;
    imageSize[e.target.dataset.index] = {
      width: viewWidth,
      height: viewHeight
    }
    this.setData({
      imageSize: imageSize
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