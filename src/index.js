import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index.reducer'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

const logger = createLogger({
    stateTransformer: (state) => state,
    diff: true
  })

  const store = compose(
    applyMiddleware(thunk),
    applyMiddleware(logger)
  )(createStore)(rootReducer)
 
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
  
serviceWorker.unregister();
