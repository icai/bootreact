import { applyMiddleware, compose, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import rootReducer from './reducers'
import App from './App'
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'themes/index.less'
import './index.css';

import registerServiceWorker from './registerServiceWorker';
const history = createBrowserHistory()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
    ),
  ),
)

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <LocaleProvider locale={zh_CN}>
        <App history={history} />
      </LocaleProvider>
    </Provider>,
    document.getElementById('root')
  )
}
render()
registerServiceWorker();
