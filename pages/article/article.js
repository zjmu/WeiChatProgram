import {
  listLabel
} from '../../service/article.js'

Page({
  data: {
    imgList:[],
    imgUrls:[],
    label:[],
    labelId:[],
    content:'',
    title:''
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
    this.setData({
     content:e.detail.value
    })
  },
  inputTitle: function(e) {
    this.setData({
     title:e.detail.value
    })
  },
  // 优化，使用异步函数调用
  onSub: function () {
    // 点击提交后，开始上传图片
    let imgUrls = []
    console.log('onsub content:'+this.data.content)
    console.log('onsub title:'+this.data.title)
    console.log('onsub labelId:'+this.data.labelId)
    for (let index = 0; index < this.data.imgList.length; index++) {
      console.log('uploadfile path:'+this.data.imgList[index])
      this.uploadFile(this.data.imgList[index]).then((res) => {
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
      count: 9, // 做多3张
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        // 存储临时地址
        // this.data.imgList.push(res.tempFilePaths)
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
        url: 'http://localhost:8080/file/uploadFile', // 上传地址
        filePath: filePath,
        name: 'file', // 这里的具体值，问后端人员
        formData: {

        },
        header: {
          "Content-Type": "multipart/form-data"
        },
        success: (res) => {
          // 图片上传成功后，后端会返回一个地址，可以把它存到imgUrls
          this.data.imgUrls.concat(res.data.data)
          console.log(res)
        },
        fail: (err) => {
          console.log(err)
        }
      })
    })
  },
  //多选框统计数据
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    this.data.labelId = e.detail.value;
    console.log('labelId')
    console.log( this.data.labelId)
  }
})