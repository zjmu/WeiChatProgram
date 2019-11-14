App({

  //生命周期函数:后台存活两个小时
  //小程序初始化完成执行周期函数,可在这获得options
  onLaunch: function() {
    console.log('小程序初始化完成： onLoad')
    //   console.log('小程序初始化完成了：onLaunch')
    //   wx.request({
    //     url: '',
    //   })

    //异步调用
    wx.getUserInfo({
      //数据拿到之后进行回调
      success: function(res) {
        console.log(res)
      }
    })

    // setTimeout(function() {
    //   const err = new Error()

    //   throw err
    // },3000)
  },

  //小程序界面显示出来后执行生命周期函数
  onShow: function(options) {
    console.log('界面显示出来：onshow')
    console.log(options)
    switch (options.scene) {
      case 1001:
        // console.log('扫描')
        break;
      case 1005:
        console.log('点击')
        break;
    }
  },

  onHide: function() {
    console.log('界面被隐藏：onHide')
  },

  onError: function(msg) {
    // console.log('小程序中发生错误：onError')
  },
  globalData: {
    name: "call",
    age: 11
  }
})