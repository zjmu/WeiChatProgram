// pages/select/select.js
Page({
  data: {
    info: [{
        icon: '/assets/本周流行/本周流行.jpg',
        nick: '绝色露台0',
        detail: '我很个性',
        userId: 90,
        home:'五社区五号楼220',
        phone:'13345679989'
      },
      {
        icon: '/assets/本周流行/本周流行.jpg',
        nick: '绝色露台1',
        detail: '我很个性',
        userId: 91,
        home:'五社区五号楼220',
        phone:'13345679989'
      },
      {
        icon: '/assets/本周流行/本周流行.jpg',
        nick: '绝色露台2',
        detail: '我很个性',
        userId: 92,
        home:'五社区五号楼220',
        phone:'13345679989'
      },
      {
        icon: '/assets/本周流行/本周流行.jpg',
        nick: '绝色露台3',
        detail: '我很个性',
        userId: 93,
        home:'五社区五号楼220',
        phone:'13345679989'
      },
    ],
    tabTxt: [
        {
            'text': '小区',
            'originalText': '小区',
            'active': false,
            'child': [
                { 'id': 1, 'text': '西社小区' },
                { 'id': 2, 'text': '丽园小区' },
                { 'id': 3, 'text': '天通泰' }
            ],
            'type': 0
        },
        {
            'text': '楼栋',
            'originalText': '楼栋',
            'active': false,
            'child': [
                { 'id': 1, 'text': 'A栋' },
                { 'id': 2, 'text': '摇滚' },
                { 'id': 3, 'text': '民谣' },
                { 'id': 4, 'text': '轻音乐' }
            ], 'type': 0
        },
        {
            'text': '单元',
            'originalText': '单元',
            'active': false,
            'child': [
                { 'id': 1, 'text': '学习' },
                { 'id': 2, 'text': '工作' },
                { 'id': 3, 'text': '运动' }
            ],
            'type': 0
        },
        {
            'text': '楼层',
            'originalText': '楼层',
            'active': false,
            'child': [
                { 'id': 1, 'text': '怀旧' },
                { 'id': 2, 'text': '清新' },
                { 'id': 3, 'text': '治愈' }
            ],
            'type': 0
        }
    ],
    searchParam: []
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  switchRightTab:function(e) {
    const index = e.currentTarget.dataset.id
    console.log(index)
    this.setData({
      curNav: index
    })
    console.log(this.data.title[index].name)
  },
  bindViewTap: function () {
    wx.navigateTo({
        url: '../logs/logs'
    })
},
onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
        //更新数据
        that.setData({
            userInfo: userInfo
        })
    })
},

//导航栏
filterTab: function (e) {
    var that = this;
    var data = JSON.parse(JSON.stringify(that.data.tabTxt));
    var index = e.currentTarget.dataset.index;
    var newTabTxt = data.map(function (e) {
        e.active = false;
        return e;
    });
    newTabTxt[index].active = !that.data.tabTxt[index].active;
    this.setData({
        tabTxt: data
    })

},
filterTabChild: function (e) {

    //我需要切换选中项 修改展示文字 并收回抽屉  
    var that = this;
    var index = e.currentTarget.dataset.index;
    var data = JSON.parse(JSON.stringify(that.data.tabTxt));
    if (typeof (e.target.dataset.id) == 'undefined' || e.target.dataset.id == '') {
        data[index].active = !that.data.tabTxt[index].active;
    }
    else {
        data[index].type = e.target.dataset.id;
        data[index].active = !that.data.tabTxt[index].active;
        if (e.target.dataset.id=='0'){
            data[index].text = that.data.tabTxt[index].originalText;
            //不限删除条件
            delete that.data.searchParam[index];
        }
        else{
            data[index].text = e.target.dataset.txt;
            //更改删除条件
            that.data.searchParam[index] = data[index].text;
        }
        
        
    }

    that.setData({
        tabTxt: data
    })
    console.log(that.data.searchParam);
    //通过参数发起后端请求，得到列表
}
})