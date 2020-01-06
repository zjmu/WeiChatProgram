// components/w-navbar/w-navbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navbar: {
      type:Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentTab: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    navbarTap: function(e){
      this.setData({
        currentTab: e.currentTarget.dataset.idx
      })
      console.log(this.data.currentTab)
    }
  }
})
