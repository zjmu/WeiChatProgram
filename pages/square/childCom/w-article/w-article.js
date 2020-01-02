// pages/square/childCom/w-article/w-article.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleList:{
      type:Array,
      value:[]
    }
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    isopen:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    iscommentTap: function() {
      this.setData({
        isopen: !this.data.isopen
      })
      console.log(this.data.isopen)
    }
  }
})
