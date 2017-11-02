import {
    WEBSOCKET_CONNECT,
    WEBSOCKET_DISCONNECT,
    WEBSOCKET_SEND,
    WEBSOCKET_CONNECTING,
    WEBSOCKET_OPEN,
    WEBSOCKET_CLOSED,
    WEBSOCKET_MESSAGE
} from '../middleware/websocket'

const initialState = {
    url: '',
    connectState: WEBSOCKET_CLOSED,
    clientMessages: [],
    serverMessages: []
}

export default function websocket(state = initialState, action) {

    switch (action.type) {
        case WEBSOCKET_CONNECT:
            return { ...state, url: action.payload.url, connectState: WEBSOCKET_CONNECT}
        case WEBSOCKET_DISCONNECT:
        case WEBSOCKET_CONNECTING:
        case WEBSOCKET_OPEN:
        case WEBSOCKET_CLOSED:
            return { ...state, connectState: action.type}     
        case WEBSOCKET_SEND:
            return { ...state, clientMessages: [...state.clientMessages, action.payload] }
        case WEBSOCKET_MESSAGE:
            return { ...state, serverMessages: [...state.serverMessages, action.payload.data]}
        default:
            return state;
    }

}
