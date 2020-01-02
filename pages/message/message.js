// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allPeopleSearch: '',
    messagePeopleSearch: '',
    navbar: ['消息', '联系人'],
    currentTab: 1
  },
  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
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

  },
  wxSearchFn1: function() {
    console.log(this.data.messagePeopleSearch)
  },
  wxSearchFn2: function() {
    console.log(this.data.allPeopleSearch)
  },
  messageInput:function(e) {
    console.log(e)
    this.data.messagePeopleSearch = e.detail.value
    console.log(this.data.messagePeopleSearch)
  },
  allPeopleInput:function(e) {
    console.log(e)
    this.data.allPeopleSearch = e.detail.value
    console.log(this.data.allPeopleSearch)
  },
  itemTap:function(event) {
    console.log(event.currentTarget.dataset.id)
  },
  userTap:function(event) {
    console.log(event.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../communication/communication',
    })
  }
})