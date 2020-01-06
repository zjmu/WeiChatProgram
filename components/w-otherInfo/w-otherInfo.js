// components/w-otherInfo/w-otherInfo.js
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
      console.log(event.currentTarget.dataset.id)
      wx.navigateTo({
        url: '../myAttention/myAttention',
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
    }
  }
})
