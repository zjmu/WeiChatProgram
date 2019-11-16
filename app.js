const TOKEN = 'token'

App({
  //对象：小程序关闭，内存回收
  globalData: {
    token: ''
  },
  onLaunch: function() {
    //1.先从缓存中取出token
    const token = wx.getStorageSync(TOKEN)
    if(token && token.length !== 0) {
      //有token，验证是否过期
      this.check(token)
    } else {
      //没有token，登录
      this.login()
    }

  },
  check(token) {
    console.log('执行缓存操作')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: (res) => {
        console.log('token有效')
        if(!res.data.errCode) {
          this.globalData.token = token;
        } else {
          this.login()
        }
      },
      fail: (err) => {
        console.log(err)
      }
    })
  },
  login() {
    console.log('执行了登录操作')
    wx.login({
      //code只有5分钟的有效期
      success: (res) => {
        console.log(res)
        //1、获取code
        const code = res.code;

        //2.将code发送给服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          data: {
            code
          },
          method: 'post',
          success: (res) => {
            console.log(res)
            //1.获取token
            const token = res.data.token;
            console.log(res.data.token)

            //2.token保存到全局变量
            this.token = token;

            //3.进行本地存储
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  }
})