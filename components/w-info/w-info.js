// components/w-info/w-info.js
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
    update: function() {
      this.setData ({
        isUpdate: !this.data.isUpdate
      })
      //TODO：修改结束，发送修改请求
      if(!this.data.isUpdate) {
        console.log('修改成功')
      }
      
    }
  }
})
