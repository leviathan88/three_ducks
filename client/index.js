import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import App from './components/App'
import store from './store'
import routes from './routes'

render(
  <Router history={browserHistory} routes={routes}/>
  , document.getElementById('app'))
