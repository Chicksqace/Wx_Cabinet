//logs.js
// const util = require('../../utils/util.js')

Page({
  data: {
    // logs: []
    disabled: false,
    code: '获取验证码'
  },
  goGetCode:function(){
    var that = this;
    var time = 60;
    that.setData({
      code: '60秒后重发',
      disabled: true
    })
    var Interval = setInterval(function() {
      time--;
      if (time>0){
        that.setData({
          code: time + '秒后重发'
        })
      }else{
        clearInterval(Interval);
        that.setData({
          code: '获取验证码',
          disabled: false
        })
      }
    },1000)

}
  // onLoad: function () {
  //   this.setData({
  //     logs: (wx.getStorageSync('logs') || []).map(log => {
  //       return util.formatTime(new Date(log))
  //     })
  //   })
  // }
})
