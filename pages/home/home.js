// pages/home/home.js
//调用App产生的示例对象
const app = getApp()
console.log(app.globalData.name)
console.log(app.globalData.age)
Page({
  data: {
    name: "普罗米修斯",
    students: [
      { id: 1, name: "刘备", age: 56 },
      { id: 2, name: "关羽", age: 56 },
      { id: 3, name: "张飞", age: 56 },
      { id: 4, name: "诸葛亮", age: 56 },
      { id: 5, name: "赵云", age: 56 }
    ],
    count: 0,
    list: []
  },
  addCount() {
    this.setData({
      count: this.data.count+1
    })
  },
  getUserInfo(event) {
    console.log("用户信息")
    console.log(event)
  },
  onShow() {
    console.log('onShow')
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: function(res) {
        console.log(res)
        const dd = res.data;
        this.setData({
          list: dd
        })
      }
    })
  },
  onReady() {
    console.log('onReady')
  },  
  onHide() {
    console.log('onHide')
  },
  onUnload() {
    console.log('onUnLoad')
  }
})