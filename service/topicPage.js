import request from './network.js'

export function listTopicPage(labelId,pageNum, pageSize) {
  return request({
    url: '/articleLabel/listArticleOfLabel',
    data: {
      labelId,
      pageNum,
      pageSize
    }
  })
}