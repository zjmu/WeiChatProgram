import request from './network.js'

export function listFavoriteArticle(pageNum, pageSize) {
  return request({
    url: '/favorite/listFavoriteArticle',
    data: {
      pageNum,
      pageSize
    }
  })
}

export function cancelFavoriteArticle(articleId) {
  return request({
    url: '/favorite/cancelFavoriteArticle/'+articleId,
    method: 'delete'
  })
}

export function addFavoriteArticle(articleId) {
  return request({
    url: '/favorite/addFavoriteArticle',
    data: {
      articleId
    },
    method: 'post'
  })
}
