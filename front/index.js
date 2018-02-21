import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { Route } from 'react-router'

import reducers from './reducers'

import App from './containers/App.js'
import Grant from './containers/Grant.js'
import Bid from './containers/Bid.js'
import User from './containers/User.js'

import './styles/index.scss'

const history = createHistory()
const routerMW = routerMiddleware(history)

const store = createStore(combineReducers({
  ...reducers,
  router: routerReducer
}), applyMiddleware(thunk, routerMW))

ReactDOM.render(
<Provider store={store}>
  <ConnectedRouter history={history}>
    <HashRouter>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/:grantId/:bidId' component={Bid} />
        <Route path='/:grantId' component={Grant} />
        <Route path='/profile' component={User} />
      </div>
    </HashRouter>
  </ConnectedRouter>
</Provider>,
document.getElementById('app'))
