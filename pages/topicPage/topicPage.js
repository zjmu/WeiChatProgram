// pages/topicPage/topicPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleList: [{
      icon: '/assets/本周流行/本周流行.jpg',
      nick: '绝色露台',
      detail: '我很个性',
      content: '的方式放松放松放松的方范德萨水电费水电费是发送到发送到发式笛梵地方',
      lineCount: 2,
      imageLis: 3,
      imageList: {
        type: Array,
        value: [{ image: '/assets/本周流行/本周流行.jpg' }, { image: '/assets/本周流行/本周流行.jpg' }, { image: '/assets/本周流行/本周流行.jpg'}]
      }
    },
    {
      nick: '绝色露台',
      detail: '我很个性',
      content: '的方式放松放松放松的方范德萨水电费水电费是发送到发送到发式笛梵地方',
      lineCount: 2,
      imageLis: 3,
      imageList: {
        type: Array,
        value: [{ image: '/assets/本周流行/本周流行.jpg' }, { image: '/assets/本周流行/本周流行.jpg' }, { image: '/assets/本周流行/本周流行.jpg' }]
      }
    }
    ]
  },

  /**
   * 获取上个页面传递的值
   */
  onLoad: function (options) {
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      console.log('-------------------------------')
      console.log(data)
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

  }
})