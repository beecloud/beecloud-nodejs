import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
// import logger from 'redux-logger'

export default function configureStore(preloadedState) {
  const store = createStore(rootReducer,
    preloadedState,
    applyMiddleware(thunk))
  return store
}
