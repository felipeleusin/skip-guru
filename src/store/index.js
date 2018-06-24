import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from '../reducers'

const middlewares = []

if (process.env.NODE_ENV === 'development') {
  /* eslint-disable global-require */
  const { createLogger } = require('redux-logger')

  const logger = createLogger({ collapsed: true })
  middlewares.push(logger)
}

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers', () => {
    const nextRootReducer = require('../reducers/index').default

    store.replaceReducer(nextRootReducer)
  })
}

export default store
