// pages/square/childCom/w-article/w-article.js
import {
  listComment,
  createComment
} from '../../../../service/comment.js'

import {
  addFavoriteArticle,
  cancelFavoriteArticle
} from '../../../../service/favorite.js'

import {
  likeArticle,
  unlikeArticle
} from '../../../../service/like.js'
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
    openOrder: -1,
    commentBody: [],
    showModal: false,
    commentText:'',
    commentId:-1,
    articleId:-1
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
        //发送评论请求
        var articleId = event.currentTarget.dataset.articleid
        console.log(articleId)
        console.log('sdfsfsdf')
        listComment(articleId).then(res => {
          console.log(res)
          this.setData({
            commentBody:res.data.data
          })
        })
      }
    },
    recomment:function(e) {
      this.showDialogBtn();
      this.data.commentId = e.currentTarget.dataset.commentid
      this.data.articleId = e.currentTarget.dataset.articleid
    },
    attention:function(e) {
      console.log(e.currentTarget.dataset.userid)
    },

    // --------------弹框----------------
    showDialogBtn: function() {
      this.setData({
        showModal: true
      })
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

    onConfirm: function () {
      this.hideModal();
      const text = this.data.commentText
      const commentId = this.data.commentId
      const articleId = this.data.articleId
      createComment(text,commentId,articleId).then(res => {
        console.log(res)
      })
    },
    inputChange: function(e) {
      this.setData({
        commentText: e.detail.value
      })
    },

    addFavorite: function(e) {
      console.log(e.currentTarget.dataset.articleid)
      const articleId = e.currentTarget.dataset.articleid
      addFavoriteArticle(articleId).then(res => {
        if(res.data.code == 0) {
          wx.showToast({
            title: res.data.data,
            icon: 'success',
            duration: 1000,
            mask:true
          })
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

    cancelFavorite: function(e) {
      console.log(e.currentTarget.dataset.articleid)
      const articleId = e.currentTarget.dataset.articleid
      cancelFavoriteArticle(articleId).then(res => {
        if(res.data.code == 0) {
          wx.showToast({
            title: res.data.data,
            icon: 'success',
            duration: 1000,
            mask:true
          })
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
    
    like: function(e) {
      console.log(e.currentTarget.dataset.articleid)
      const articleId = e.currentTarget.dataset.articleid
      likeArticle(articleId).then(res => {
        console.log(res)
      })
    },

    unlike: function(e) {
      const articleId = e.currentTarget.dataset.articleid
      unlikeArticle(articleId).then(res => {
        console.log(res)
      })
    }
    
  }
})
