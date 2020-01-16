import request from './network.js'

export function unlikeArticle(articleId) {
  return request({
    url: '/like/unlikeArticle/'+articleId,
    method: 'delete'
  })
}

export function likeArticle(articleId) {
  return request({
    url: '/like/likeArticle',
    method: 'post',
    data: {
      articleId
    }
    
  })
}