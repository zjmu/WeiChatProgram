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
    }
  }
})
