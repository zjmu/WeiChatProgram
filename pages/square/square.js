// pages/square/square.js
import {
  listArticlePage
} from '../../service/square.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageNum: 1,
    pageSize: 10,
    articleList: [
      ],
      announcement: [{ image: '/assets/本周流行/本周流行.jpg',text:'这是一个广告' }, { image: '/assets/本周流行/本周流行.jpg',text:'这是一个大广告' }, { image: '/assets/本周流行/本周流行.jpg',text:'这是一个小广告' }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    listArticlePage(this.data.pageNum,this.data.pageSize).then(res => {
      console.log(res)
      this.setData({
        articleList: res.data.data.list
      })
      console.log(this.data.articleList1)
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
    console.log('我到底了')
    this.data.pageNum++;
    console.log(this.data.pageNum)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
})