import {
  listTopicPage
} from '../../service/topicPage.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEnd: false,
    pageNum: 1,
    pageSize: 10,
    labelId:-1,
    articleList: []
  },

  /**
   * 获取上个页面传递的值
   */
  onLoad: function (options) {
    var that = this
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on('acceptDataFromOpenerPage', function(topicId) {
      that.setData({
        labelId: topicId.data
      })
    })
    listTopicPage(this.data.labelId,this.data.pageNum,this.data.pageSize).then(res => {
      console.log(res)
      this.setData({
        articleList: res.data.data.list
      })
    })
    console.log(this.data.articleList)
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
    if(this.data.isEnd == false) {
      this.data.pageNum++;
      console.log(this.data.pageNum)
      listTopicPage(this.data.labelId,this.data.pageNum,this.data.pageSize).then(res => {
        if(res.data.data.list.length !=0 && res.data.data.pageNum >= this.data.pageNum) {
          var array = this.data.articleList.concat(res.data.data.list)
          console.log(res.data.data.list)
          this.setData({
            articleList: array
          })
        } else {
          this.data.isEnd = true
          wx.showToast({
            title: '无更多数据',
            icon: 'none',
            duration: 1000,
            mask:true
          })
        }
      })
    } else {
      wx.showToast({
        title: '无更多数据',
        icon: 'none',
        duration: 1000,
        mask:true
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})