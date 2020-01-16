import {
  cancelAttention,
  listAttention
} from '../../service/attention.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    info: {
      type: Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isUpdate: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    articleTap: function(event) {
      console.log(event.currentTarget.dataset.id)
      wx.navigateTo({
        url: '../myArticle/myArticle',
      })
    },
    attentionTap: function(event) {
      const userId = event.currentTarget.dataset.id
      wx.navigateTo({
        url: '../otherAttention/otherAttention?userId',
        success: function(res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', { data: userId })
        }
      })
    },
    likeTap: function(event) {
      console.log(event.currentTarget.dataset.id)
      wx.navigateTo({
        url: '../myLike/myLike',
      })
    },
    connect: function(e) {
      var userId = e.currentTarget.dataset.userid
      wx.navigateTo({
        url: '../../pages/communication/communication',
        success: function(res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', { data: userId })
        }
      })
    },

    atten: function(e) {
      var userId = e.currentTarget.dataset.userid
      console.log(userId)
      cancelAttention(userId).then(res => {
        console.log(res)
        if(res.data.code == 0) {
          listAttention().then(res => {
            this.setData({
              info: res.data.data
            })
          })
          this.cancelSuccess()
        } else {
          this.cancelFail()
        }
      })
    },
    cancelSuccess:function() {
      wx.showToast({
        title: '取消成功',
        icon: 'success',
        duration: 1000,
        mask:true
      })
    },
    cancelFail:function() {
      wx.showToast({
        title: '取消失败',
        icon: 'none',
        duration: 1000,
        mask:true
      })
    }
  }
})
