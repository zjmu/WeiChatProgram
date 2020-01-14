import request from './network.js'

export function listAttention() {
  return request({
    url: '/attention/listAttentionOfUser',
  })
}

export function listOtherAttention(userId) {
  return request({
    url: '/attention/listAttentionOfOther',
    data: {
      userId
    }
  })
}