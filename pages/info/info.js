// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: [{
      icon: '/assets/本周流行/本周流行.jpg',
      nick: '绝色露台',
      detail: '我很个性',
      userId: 99,
      home:'五社区五号楼220',
      phone: '13255467789'
    }]
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

  },

  articleTap: function() {
    wx.navigateTo({
      url: '../myArticle/myArticle',
    })
  },
  attentionTap: function() {
    wx.navigateTo({
      url: '../myAttention/myAttention',
    })
  },
  likeTap: function() {
    wx.navigateTo({
      url: '../myLike/myLike',
    })
  }
})