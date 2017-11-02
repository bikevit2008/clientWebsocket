import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import websocket from '../middleware/websocket'
import {wsConnect}  from '../actions/webSocket'




export default function configureStore(initialState) {
  const logger = createLogger()
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(websocket, thunk, logger)))
  const wsUrl = 'ws://' + window.location.toString().replace('http://', '')
  store.dispatch(wsConnect(wsUrl))

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
