// pages/article/article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  // 使用async await等待图片上传
  onSub: async function () {
    // 点击提交后，开始上传图片
    let imgUrls = []
    for (let index = 0; index < this.data.imgList.length; index++) {
      await this.uploadFile(this.data.imgList[index]).then((res) => {
        // 这里要注意把res.data parse一下，默认是字符串
        let parseData = JSON.parse(res.data)
        imgUrls.push(parseData.data) // 图片地址
      })
    }
    console.log(imgUrls) // 3张图片上传成功后，执行其他操作
  },
  // 删除某张图片
  clearImg: function (params) {
    let imgList = this.data.imgList
    let id = params.currentTarget.dataset.id // 图片索引
    imgList.splice(id, 1) // 删除
    this.setData({
      imgList: imgList
    })
  },
  chooseImage: function (params) {
    wx.chooseImage({
      count: 3, // 做多3张
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        // 存储临时地址
        this.setData({
          imgList: res.tempFilePaths
        })
      }
    })
  },
  uploadFile: function (filePath) {
    // 返回Promise是为了解决图片上传的异步问题
    return new Promise((resolve, reject) => {
      wx.uploadFile({
        url: app.globalData.baseUrl + '/file/upload', // 上传地址
        filePath: filePath,
        name: 'file', // 这里的具体值，问后端人员
        formData: {},
        header: {
          "Content-Type": "multipart/form-data"
        },
        success: (res) => {
          // 图片上传成功后，后端会返回一个地址，可以把它存到imgUrls
          this.imgUrls.push(res.data.data)
        },
        fail: (err) => {
          console.log(err)
        }
      })
    })
  }
})