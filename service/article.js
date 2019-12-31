import request from './network.js'

export function listLabel() {
  return request({
    url: '/label/listLabel'
  })
}