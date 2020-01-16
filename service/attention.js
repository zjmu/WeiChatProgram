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

export function cancelAttention(id) {
  return request({
    url: '/attention/cancelAttention/'+id,
    method: 'delete'
  })
}