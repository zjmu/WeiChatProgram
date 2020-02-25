import request from './network.js'

export function getSystemArticle(id) {
  return request({
    url: '/systemArticle/getSystemArticle',
    data: {
      id
    }
  })
}