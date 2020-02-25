import request from './network.js'


export function getUserInfo() {
  return request({
    url: '/user/getUser'
  })
}