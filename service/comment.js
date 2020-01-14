import request from './network.js'

export function listComment(articleId) {
  return request({
    url: '/articleComment/listComment',
    data: {
      articleId
    }
  })
}

export function createComment(content,parentId,articleId) {
  return request({
    url: '/articleComment/create',
    data: {
      content,parentId,articleId
    },
    method: 'post'
  })
}