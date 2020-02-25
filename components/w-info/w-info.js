import {
  getArea,
  getBuilding,
  getUnit,
  getFloor,
  getRoomCode,
  bindRoom,
  cancelBind
} from '../../service/room.js'
Component({
  lifetimes:{
    attached: function() {
      this.setData({
        home: this.properties.info.home
      })
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    info: {
      type:Object,
      value:{
      }
    }
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgCount:0,
    imgList:[],
    imgUrls:[],
    isUpdate: false,
    value:"",
    area: [],
    building: [],
    unit: [],
    floor: [],
    roomCode: [],
    animationAddressMenu: {},
    addressMenuIsShow: true,
    home:"",
    showModal:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bind: function() {
      getArea().then(res => {
        console.log(res)
        this.setData({
          area: res.data.data
        })
      })
    },
    cancel: function() {
      cancelBind().then(res => {
        console.log(res)
        if(res.data.code == 0) {
          wx.showToast({
            title: res.data.data,
            icon: 'success',
            duration: 1000,
            mask:true
          })
          this.setData({
            home: null
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
    // --------------弹框----------------
    showDialogBtn: function() {
      var value = this.data.value
      if(this.data.home != null && this.data.home != '') {
        wx.showToast({
          title:'请先解除绑定',
          icon: 'none',
          duration: 1000,
          mask:true
        })
        return
      }
      this.setData({
        showModal: true
      })
      this.setData({
        home: this.data.area[value[0]]+this.data.building[value[1]]+this.data.unit[value[2]]+this.data.floor[value[3]]+this.data.roomCode[value[4]]
      })
      //发送验证材料，个人身份证，房产证
    },
    /**
     * 弹出框蒙层截断touchmove事件
     */
    preventTouchMove: function () {
    },
    /**
     * 隐藏模态对话框
     */
    hideModal: function () {
      this.setData({
        showModal: false
      });
    },

    onCancel: function () {
      this.hideModal();
    },
    onConfirm: async function (e) {
      this.hideModal();
      // 点击提交后，开始上传图片
      var isSuccess = true
      this.data.imgUrls = []
      for (let index = 0; index < this.data.imgList.length; index++) {
        await this.uploadFile(this.data.imgList[index]).then((res) => {
        }).catch((res) =>{
          isSuccess = false
          wx.showToast({
            title: '图片上传失败',
            icon: 'none',
            duration: 1000,
            mask:true
          })
        })
      }
      if(isSuccess) {
        console.log('上传材料开始')
        var value = this.data.value     
        bindRoom(this.data.area[value[0]],this.data.building[value[1]],this.data.unit[value[2]],this.data.floor[value[3]],this.data.roomCode[value[4]],this.data.imgUrls)
        .then(res => {
          console.log(res)
          if(res.data.code == 0) {
            wx.showToast({
              title: res.data.data,
              icon: 'success',
              duration: 1000,
              mask:true
            })
            this.setData({
              home: this.data.area[value[0]]+this.data.building[value[1]]+this.data.unit[value[2]]+this.data.floor[value[3]]+this.data.roomCode[value[4]]
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
      }
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
    },
    
    inputChange: function(e) {
      this.setData({
        commentText: e.detail.value
      })
    },
    // 删除某张图片
    clearImg: function (params) {
      let imgList = this.data.imgList
      let id = params.currentTarget.dataset.id // 图片索引
      imgList.splice(id, 1) // 删除
      this.setData({
        imgList: imgList
      })
      this.setData({
        imgCount: this.data.imgCount - 1
      })
    },
    chooseImage: function (params) {
      if(this.data.imgCount >= 3) {
        wx.showToast({
          title:'最多添加三张照片',
          icon: 'none',
          duration: 1000,
          mask:true
        })
        return
      }
      this.setData ({
        imgCount : this.data.imgCount + 1
      })
      wx.chooseImage({
        count: 3, // 做多3张
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: (res) => {
          // 存储临时地址
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          });
          console.log(this.data.imgList)
        }
      })
    },
    uploadFile: function (filePath) {
      // 返回Promise是为了解决图片上传的异步问题
      return new Promise((resolve, reject) => {
        wx.uploadFile({
          url: 'http://localhost:8091/bbs_client/article/uploadImage', // 上传地址
          filePath: filePath,
          name: 'file', // 这里的具体值，问后端人员
          formData: {
          },
          header: {
            "Content-Type": "multipart/form-data"
          },
          success: (res) => {
            const result = JSON.parse(res.data)
            this.data.imgUrls.push(result.data)
            console.log('--------=====----------------')
            console.log(this.data.imgUrls)
            resolve('上传成功')
          },
          fail: (err) => {
            reject('上传失败')
          }
        })
      })
    }
  }
})
