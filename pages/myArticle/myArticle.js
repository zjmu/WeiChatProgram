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
    isEnd: false
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
    this.data.articleList = []
    listArticleOfUser(this.data.pageNum,this.data.pageSize).then(res => {
      console.log(res)
      this.setData({
        articleList: res.data.data.list
      })
      console.log(this.data.articleList)
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if(this.data.isEnd == false) {
      this.data.pageNum++;
      console.log(this.data.pageNum)
      listArticleOfUser(this.data.pageNum,this.data.pageSize).then(res => {
        if(res.data.data.list.length !=0 && res.data.data.pageNum >= this.data.pageNum) {
          var array = this.data.articleList.concat(res.data.data.list)
          this.setData({
            articleList: array
          })
        } else {
          this.data.isEnd = true
        }
        console.log(this.data.articleList1)
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

  },
  delete: function(e) {
    //删除文章
    const id = e.currentTarget.dataset.articleid
    console.log(id)
    deleteArticle(id).then(res => {
      if(res.data.code == 0) {
        wx.showToast({
          title: '删除成功',
          icon: 'success',
          duration: 1000,
          mask:true
        })
        //删除后查询文章
        listArticleOfUser(this.data.pageNum,this.data.pageSize).then(res => {
          console.log(res)
          this.setData({
            articleList: res.data.data.list
          })
          console.log(this.data.articleList)
        })
      } else {
        wx.showToast({
          title: '删除失败',
          icon: 'none',
          duration: 1000,
          mask:true
        })
      }
    })
    
  }
})