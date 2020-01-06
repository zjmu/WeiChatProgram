// pages/communication/communication.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bottom: 0,
    msgContent: '',
    userId:99,
    message: [{
      icon: '/assets/image/篮球.jpg',
      content: '自己',
      type: '发送方',
      resourceType: '文字'
    },
    {
      icon: '/assets/image/篮球.jpg',
      content: 'other',
      type: '接收方',
      resourceType: '图片',
      imageUrl: '/assets/image/篮球.jpg'
    }
    ]
  },

  /**
   * todo:进来时先根据用户获取历史信息
   */
  onLoad: function (options) {
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      console.log('-------------------------------')
      console.log(data)
      //根据用户id，获取历史记录
    })
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

  },
  //输入聚焦

  foucus: function (e) {

    var that = this;

    that.setData({

      bottom: e.detail.height

    })

  },

  blur: function (e) {

    var that = this;

    that.setData({

      bottom: 0
    })

  },
  //todo,发送消息后，使用回调函数显示信息
  sendMsgButton: function () {
    console.log(this.data.msgContent)
    this.setData({
      msgContent: ''
    })
  },
  inputTextChange: function (e) {
    this.data.msgContent = e.detail.value
    console.log(this.data.msgContent)
  },
  sendMsgConfirm: function (event) {
    console.log(event.detail.value)
    this.setData({
      msgContent: ''
    })
  },
  //todo:发送照片
  chooseImage: function () {
    wx.chooseImage({
      count: 1, // 做多9张
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        // 存储临时地址
        // this.data.imgList.push(res.tempFilePaths)
        this.setData({
          imgList: this.data.imgList.concat(res.tempFilePaths)
        });
        console.log(this.data.imgList)
      }
    })
  }

})