// components/w-float/w-float.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    image: {
      type:String,
      value: ""
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
    floatClick: function(){
      wx.navigateTo({
        url: '../article/article',
      })
    }
  }
})
