// pages/home/home.js
//调用App产生的示例对象
const app = getApp()
console.log(app.globalData.name)
console.log(app.globalData.age)

Page({
  //2.初始化数据
  data: {
    name: "普罗米修斯",
    students: [
      { id: 1, name: "刘备", age: 56 },
      { id: 2, name: "关羽", age: 56 },
      { id: 3, name: "张飞", age: 56 },
      { id: 4, name: "诸葛亮", age: 56 },
      { id: 4, name: "诸葛亮", age: 56 },
      { id: 4, name: "诸葛亮", age: 56 },
      { id: 4, name: "诸葛亮", age: 56 },
      { id: 4, name: "诸葛亮", age: 56 },
      { id: 4, name: "诸葛亮", age: 56 },
      { id: 4, name: "诸葛亮", age: 56 },
      { id: 4, name: "诸葛亮", age: 56 },
      { id: 4, name: "诸葛亮", age: 56 },
      { id: 4, name: "诸葛亮", age: 56 },
      { id: 4, name: "诸葛亮", age: 56 },
      { id: 4, name: "诸葛亮", age: 56 },
      { id: 4, name: "诸葛亮", age: 56 },
      { id: 4, name: "诸葛亮", age: 56 },
      { id: 4, name: "诸葛亮", age: 56 },
      { id: 4, name: "诸葛亮", age: 56 },
      { id: 4, name: "诸葛亮", age: 56 },
      { id: 4, name: "诸葛亮", age: 56 },
      { id: 5, name: "赵云", age: 56 }
    ],
    count: 0,
    list: []
  },
 
  //1.监听页面周期函数 
  onLoad() {
    console.log('onLoad');
  },
  onShow() {
    console.log('onShow')
    //函数内不能直接用this，要在外面定义
    var that = this
    wx.request({
      url: ' http://123.207.32.32:8000/recommend',
      success: function(res) {
        console.log(res)
        const dd = res.data;
        that.setData({
          list: dd
        })
      }
      //箭头函数可以用this，
      // success: (res) => {
        // this.data
      // }
    })
  },
  //初次渲染完成显示
  onReady() {
    console.log('onReady')
  },  
  //页面隐藏时执行
  onHide() {
    console.log('onHide')
  }, 
  onUnload() {
    console.log('onUnLoad')
  },


//3.监听页面内的事件
  addCount() {
    this.setData({
      count: this.data.count + 1
    })
  },
  getUserInfo(event) {
    console.log("用户信息")
    console.log(event)
  },
  handleViewClick() {
    console.log('该文字被点击了')
  },

  //4.监听其他事件
  //监听页面滚动
  onPageScroll(obj) {
    // console.log(obj)
  },
  //监听页面滚动到底部
  onReachBottom() {
    console.log('页面滚动到底部')
  }
})