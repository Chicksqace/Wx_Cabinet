//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    // banner
    img_banner:[
      {
        url:'../../images/banner.jpg'
      },
      {
        url: '../../images/banner1.jpg'
      }
    ],
    // 首页快捷导航
    dh_kuang:[
      {
        lujing:'../dd/dd',
        url:'../../images/dh.png',
        dh_text:'我的订单'
      },
      {
        lujing:'../youhuiq/youhuiq', 
        url: '../../images/dh1.png',
        dh_text: '优惠券'
      },
      {
        lujing: '../map/map',
        url: '../../images/dh2.png',
        dh_text: '附近机器'
      },
      {
        lujing: '#',
        url: '../../images/dh3.png',
        dh_text: '联系客服'
      }
    ],
    // 自定义导航
    zidiny_daoh:[
      {
        lianj:'../index/index',
        text_kuang:'首页',
        tupi:'../../images/wd.png'
      },
      {
        lianj: '../index/index',
        text_kuang: '扫码识机',
        tupi: '../../images/wd1.png'
      },
      {
        lianj: '../my/my',
        text_kuang: '我的',
        tupi: '../../images/wd2.png'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  gouwuc: function () {
    wx.navigateTo({
      url: '../gouwuc/gouwuc'
    })
  },
  getScancode: function () {
    var _this = this;
    wx.scanCode({
      success: (res) => {
        var result = res.result;

        _this.setData({
          result: result,
        })
      }
    })
  }
})
