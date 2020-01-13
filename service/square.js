import request from './network.js'

export function listArticlePage(pageNum, pageSize) {
  return request({
    url: '/article/listArticlePage',
    data: {
      pageNum,
      pageSize
    }
  })
}