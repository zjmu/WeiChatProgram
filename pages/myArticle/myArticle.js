// pages/myArticle/myArticle.js
import {
  deleteArticle,
  listArticleOfUser
} from '../../service/article.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageNum:1,
    pageSize: 6,
    articleList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    listArticleOfUser(this.data.pageNum,this.data.pageSize).then(res => {
      console.log(res)
      this.setData({
        articleList: res.data.data.list
      })
      console.log(this.data.articleList)
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
  delete: function(e) {
    //删除文章
    const id = e.currentTarget.dataset.articleid
    console.log(id)
    deleteArticle(id)
    //删除后查询文章
    listArticleOfUser(this.data.pageNum,this.data.pageSize).then(res => {
      console.log(res)
      this.setData({
        articleList: res.data.data.list
      })
      console.log(this.data.articleList)
    })
  }
})