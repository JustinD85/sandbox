import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers'
// import createSagaMiddleware from 'redux-saga'
// import { mainSaga } from './store/sagas'

// const sagaMiddleware = createSagaMiddleware()
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
const store = createStore(rootReducer, devTools)

// const action = type => store.dispatch({ type })

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')
const rootElement = document.getElementById('root')

const provider = (
  <Provider store={store}>
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(provider, rootElement)
