import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { fromJS } from 'immutable'
// import withRedux from 'next-redux-wrapper'
// import nextReduxSaga from 'next-redux-saga'

import { rootReducer, rootInitialState } from './reduces/index'
import rootSaga from './sagas/index'

const sagaMiddleware = createSagaMiddleware()

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

function configureStore(initialState = rootInitialState) {
  const immutableInitialState = initialState
  Object.keys(initialState).forEach((key) => {
    immutableInitialState[key] = fromJS(initialState[key])
  })
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware]),
  )

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }

  store.runSagaTask()
  return store
}

export default configureStore
