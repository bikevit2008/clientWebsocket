import { WEBSOCKET_CONNECT, WEBSOCKET_DISCONNECT, WEBSOCKET_SEND } from '../middleware/websocket'

export function wsConnect(url) {
  return {
    type: WEBSOCKET_CONNECT,
    payload: {
        url: url
    }
  }
}
export function wsDisconnect() {
  return {
    type: WEBSOCKET_DISCONNECT
  }
}
export function wsSend(object) {
  return {
    type: WEBSOCKET_SEND,
    payload: object
  }
}
