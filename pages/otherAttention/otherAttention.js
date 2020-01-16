import {
  listOtherAttention
} from '../../service/attention.js'
Page({

  data: {
    ad: 0,
    attentionInfo:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取传值信息
    const eventChannel = this.getOpenerEventChannel();
    var that
    eventChannel.on('acceptDataFromOpenerPage', function(userId) {
      //根据userId查别人关注的人
      listOtherAttention(userId.data).then(res => {
        console.log('++++++++++++++++++++++++')

        //TODO：
        this.data.attentionInfo = res.data.data
      })
    })
    console.log('-------------------------------')
    console.log(this.data.attentionInfo)
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