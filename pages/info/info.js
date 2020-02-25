import {
  getArea,
  getBuilding,
  getUnit,
  getFloor,
  getRoomCode,
  bindRoom
} from '../../service/room.js'
import {
  getUserInfo
} from '../../service/info.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {
    },

    value:"",
    area: [],
    building: [],
    unit: [],
    floor: [],
    roomCode: [],
    animationAddressMenu: {},
    addressMenuIsShow: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getArea().then(res =>{
      this.data.info.area = res.data.data
      this.setData({
        area: res.data.data
      })
    })
    getUserInfo().then(res => {
      console.log(res)
      this.setData({
        info: res.data.data
      })
    })
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

  articleTap: function() {
    wx.navigateTo({
      url: '../myArticle/myArticle',
    })
  },
  attentionTap: function() {
    wx.navigateTo({
      url: '../myAttention/myAttention',
    })
  },
  likeTap: function() {
    wx.navigateTo({
      url: '../myLike/myLike',
    })
  },


    // 点击所在地区弹出选择框
    selectDistrict: function (e) {
      var that = this
      // 如果已经显示，不在执行显示动画
      if (that.data.addressMenuIsShow) {
        return
      }
      // 执行显示动画
      that.startAddressAnimation(true)
    },
    // 执行动画
    startAddressAnimation: function (isShow) {
      console.log(isShow)
      var that = this
      if (isShow) {
        // vh是用来表示尺寸的单位，高度全屏是100vh
        that.animation.translateY(0 + 'vh').step()
      } else {
        that.animation.translateY(40 + 'vh').step()
      }
      that.setData({
        animationAddressMenu: that.animation.export(),
        addressMenuIsShow: isShow,
      })
    },
    // 点击地区选择取消按钮
    cityCancel: function (e) {
      this.startAddressAnimation(false)
    },
    // 点击地区选择确定按钮
    citySure: function (e) {
      var that = this
      var value = that.data.value
      // that.startAddressAnimation(false)
      bindRoom(this.data.area[value[0]],this.data.building[value[1]],this.data.unit[value[2]],this.data.floor[value[3]],this.data.roomCode[value[4]])
      .then(res => {
        console.log(res)
        if(res.data.code == 0) {
          console.log(res)
          wx.showToast({
            title: res.data.data,
            icon: 'success',
            duration: 1000,
            mask:true
          })
          wx.stopPullDownRefresh()
        } else {
          wx.showToast({
            title: res.data.message,
            icon: 'none',
            duration: 1000,
            mask:true
          })
        }
      })
    },
    // 点击蒙版时取消组件的显示
    hideCitySelected: function (e) {
      console.log(e)
      this.startAddressAnimation(false)
    },
    // 处理小区联动逻辑
    areaChange:async function (e) {
      this.data.value = e.detail.value
      var areaNum = this.data.value[0]
      var buildingNum = this.data.value[1]
      var unitNum = this.data.value[2]
      var floorNum = this.data.value[3]
      await getBuilding(this.data.area[areaNum]).then(res => {
        console.log(res)
        this.setData({
          building: res.data.data
        })
      })
      await getUnit(this.data.area[areaNum],this.data.building[buildingNum]).then(res => {
        console.log(res)
        this.setData({
          unit: res.data.data
        })
      })
      await getFloor(this.data.area[areaNum],this.data.building[buildingNum],this.data.unit[unitNum]).then(res => {
        console.log(res)
        this.setData({
          floor: res.data.data
        })
      })
      await getRoomCode(this.data.area[areaNum],this.data.building[buildingNum],this.data.unit[unitNum],this.data.floor[floorNum]).then(res => {
        console.log(res)
        this.setData({
          roomCode: res.data.data
        })
      })
    }
})