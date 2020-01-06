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
    isopen:false,
    openOrder: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    iscommentTap: function(event) {
      if(event.currentTarget.dataset.index == this.data.openOrder) {
        this.setData({
          isopen: !this.data.isopen,
        })
      } else {
        this.setData({
          openOrder: event.currentTarget.dataset.index,
          isopen: true
        })
      }
      console.log(this.data.isopen)
      console.log(this.data.openOrder)
    }
  }
})
