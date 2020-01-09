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
    openOrder: 0,
    commentBody: [{
      sendnick:'秦始皇',
      returnnick:'李白',
      userid:1,
      text: '我要修建世界上最大的防御工事'
    },
    {
      sendnick:'秦始皇1',
      returnnick:'李白',
      userid:2,
      text: '我要修建世界上最大的防御工事'
    },
    {
      sendnick:'秦始皇2',
      returnnick:'',
      userid:3,
      text: '我要修建世界上最大的防御工事'
    },{
      sendnick:'秦始皇3',
      returnnick:'',
      userid:4,
      text: '我要修建世界上最大的防御工事'
    }
  ]
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
    },
    recomment:function(e) {
      console.log(e.currentTarget.dataset.userid)
    },
    attention:function(e) {
      console.log(e.currentTarget.dataset.userid)
    }
  }
})
