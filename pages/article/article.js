import {
  listLabel,
  sendArticle
} from '../../service/article.js'

Page({
  data: {
    article : {
      imageUrls:[],
      labelId:[],
      content:'',
      title:''
    },
    label:[],
    imgList:[],
  },

  onLoad: function (options) {
    listLabel().then(res => {
      console.log(res)
      const label = res.data.data;
      this.setData({
        label
      })
      console.log(this.data.label)
    })
  },

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
  inputContent: function(e) {
      this.data.article.content = e.detail.value
  },
  inputTitle: function(e) {
    this.data.article.title = e.detail.value
  },
  // 优化，使用异步函数调用
   async onSub () {
    // 点击提交后，开始上传图片
    var isSuccess = true
    this.data.imgUrls = []
    for (let index = 0; index < this.data.imgList.length; index++) {
        await this.uploadFile(this.data.imgList[index]).then((res) => {
        }).catch((res) =>{
          isSuccess = false
          this.imageFail()
        })
    }
    if(isSuccess) {
      console.log('上传文件开始')
      this.uploadArticle()
    }
    console.log('aad') // 3张图片上传成功后，执行其他操作
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
      count: 9, // 做多3张
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        // 存储临时地址
        this.setData({
          imgList: this.data.imgList.concat(res.tempFilePaths)
        });
        console.log(this.data.imgList)
      }
    })
  },
  //TODO：后端代码，上传文件
  uploadFile: function (filePath) {
    // 返回Promise是为了解决图片上传的异步问题
    return new Promise((resolve, reject) => {
      wx.uploadFile({
        url: 'http://localhost:8091/bbs_client/article/uploadImage', // 上传地址
        filePath: filePath,
        name: 'file', // 这里的具体值，问后端人员
        formData: {
        },
        header: {
          "Content-Type": "multipart/form-data"
        },
        success: (res) => {
          const result = JSON.parse(res.data)
          this.data.article.imageUrls.push(result.data)
          console.log('--------=====----------------')
          console.log(this.data.article.imageUrls)
          resolve('上传成功')
        },
        fail: (err) => {
          reject('上传失败')
        }
      })
    })
  },
  //多选框统计数据
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    this.data.article.labelId = e.detail.value;
    console.log('labelId')
    console.log( this.data.labelId)
  },
  sendSuccess:function() {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 1000,
      mask:true
    })
  },
  sendFail:function() {
    wx.showToast({
      title: '失败',
      icon: 'none',
      duration: 1000,
      mask:true
    })
  },
  uploadArticle: function(labelId,title,content,imageUrls) {
    console.log(this.data.article.labelId)
    console.log(this.data.article.title)
    console.log(this.data.article.content)
    console.log(this.data.article.imageUrls)
    sendArticle(this.data.article).then((res) => {
      this.sendSuccess()
    })
    .catch((res) =>{
      this.sendSuccess()
    })
  }
})