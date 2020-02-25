import request from './network.js'

export function getArea() {
  return request({
    url: '/room/listArea'
  })
}

export function getBuilding(area) {
  return request({
    url: '/room/listBuilding',
    data: {
      area
    }
  })
}

export function getUnit(area,building) {
  return request({
    url: '/room/listUnit',
    data: {
      area,
      building
    }
  })
}

export function getFloor(area,building,unit) {
  return request({
    url: '/room/listFloor',
    data: {
      area,
      building,
      unit
    }
  })
}

export function getRoomCode(area,building,unit,floor) {
  return request({
    url: '/room/listRoomCode',
    data: {
      area,
      building,
      unit,
      floor
    }
  })
}

export function bindRoom(area,building,unit,floor,roomCode,imgUrls) {
  return request({
    url: '/room/bindRoom',
    data: {
      area,
      building,
      unit,
      floor,
      roomCode,
      imgUrls
    },
    method:'post'
  })
}

//解除绑定
export function cancelBind() {
  return request({
    url: '/room/cancelBind',
    method:'delete'
  })
}