// components/w-article/w-article.js
import {
  deleteArticle,
  listArticleOfUser
} from '../../service/article.js'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleList: {
      type: Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    pageNum:1,
    pageSize:6,
    articleList:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    delete: function(e) {
      //删除文章
      const id = e.currentTarget.dataset.articleid
      console.log(id)
      deleteArticle(id).then(res => {
        if(res.data.code == 0) {
          wx.showToast({
            title: '删除成功',
            icon: 'success',
            duration: 1000,
            mask:true
          })
          //删除后查询文章
          listArticleOfUser(this.data.pageNum,this.data.pageSize).then(res => {
            console.log(res)
            this.setData({
              articleList: res.data.data.list
            })
            console.log(this.data.articleList)
          })
        } else {
          wx.showToast({
            title: '删除失败',
            icon: 'none',
            duration: 1000,
            mask:true
          })
        }
      })
    }
  }
})
