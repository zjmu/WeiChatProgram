import request from './network.js'

export function listLabel() {
  return request({
    url: '/label/listLabel'
  })
}

export function sendArticle(data) {
  return request({
    url: '/article/create',
    data: data,
    method:'post'
  })
}

export function deleteArticle(id) {
  return request({
    url: '/article/delete/'+id,
    method:'delete'
  })
}

export function listArticleOfUser(pageNum, pageSize) {
  return request({
    url: '/article/listArticleOfUser',
    data: {
      pageNum,
      pageSize
    }
  })
}

// 举报
export function reportArticle(articleId, userId) {
  return request({
    url: '/aritcleReview/reportArticle',
    method: 'post',
    data: {
      articleId,
      userId
    }
  })
}

