// pages/guz/guz.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result:'',
    riderCommentList: [{
      value: '闷坏了',
      selected: false,
      title: '闷坏了'
    }, {
      value: '二维码',
      selected: false,
        title: '二维码'
    }, {
      value: '服务',
      selected: false,
      title: '服务'
    }, {
      value: '其它',
      selected: false,
        title: '其它'
    }], 
    images: []
  },
  checkboxChange(e) {
    console.log('checkboxChange e:', e);
    let string = "riderCommentList[" + e.target.dataset.index + "].selected"
    this.setData({
      [string]: !this.data.riderCommentList[e.target.dataset.index].selected
    })
    let detailValue = this.data.riderCommentList.filter(it => it.selected).map(it => it.value)
    console.log('所有选中的值为：', detailValue)
  },
  chooseImage(e) {
    wx.chooseImage({
      sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        const images = this.data.images.concat(res.tempFilePaths)
        // 限制最多只能留下3张照片
        const images1 = images.length <= 3 ? images : images.slice(0, 3)
        this.setData({
          images: images1
        })
      }
    })
  }, 
  removeImage(e) {
    var that = this;
    var images = that.data.images;
    // 获取要删除的第几张图片的下标
    const idx = e.currentTarget.dataset.idx
    // splice  第一个参数是下表值  第二个参数是删除的数量
    images.splice(idx, 1)
    this.setData({
      images: images
    })
  },

  handleImagePreview(e) {
    const idx = e.target.dataset.idx
    const images = this.data.images
    wx.previewImage({
      current: images[idx],  //当前预览的图片
      urls: images,  //所有要预览的图片
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
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})