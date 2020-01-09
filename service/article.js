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