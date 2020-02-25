// pages/home/home.js

import {
  listLabel
} from '../../service/article.js'
Page({
  data: {
    banners:[],
    recommends:[],
    navbar: ['体育','生活','敬老','追剧'],
    currentTab: 0,
    topicItem1: [],
    topicItem: [{
      image: '/assets/image/篮球.jpg',
      text: '篮球协会',
      topicId:0
    },
    {
      image: '/assets/image/篮球.jpg',
      text: '篮球协会',
      topicId:1
    },
    {
      image: '/assets/image/篮球.jpg',
      text: '篮球协会',
      topicId:2
    },
    {
      image: '/assets/image/篮球.jpg',
      text: '篮球协会',
      topicId:3
    },
    {
      image: '/assets/image/篮球.jpg',
      text: '篮球协会',
      topicId:4
    }
  ],
  announcement: [{ image: '/assets/本周流行/本周流行.jpg',text:'这是一个广告' }, { image: '/assets/本周流行/本周流行.jpg',text:'这是一个大广告' }, { image: '/assets/本周流行/本周流行.jpg',text:'这是一个小广告' }]
  },
  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    //todo:根据主题发送消息获取内容
  },
  onLoad: function (options) {
    listLabel().then(res => {
      console.log(res)
      this.setData({
        topicItem1: res.data.data
      })
    })
  },
  topicTap: function(event){
    console.log(event.currentTarget)
    console.log(event.currentTarget.dataset.topicid)
    var topicId = event.currentTarget.dataset.topicid
    wx.navigateTo({
      url: '../topicPage/topicPage?topicId=',
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: topicId })
      }
    })
  }


})