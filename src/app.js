import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import configureStore from './stores/configureStore'

import Header from './containers/header'
import Main from './containers/main'
import LeaveCalendar from './containers/leavecalendar'
import ResetPassword from './containers/resetpassword'
import UserError from './components/usererror'

const store = configureStore()

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Header}>
        <IndexRoute component={Main} />
        <Route path="/leavecalendar" component={LeaveCalendar} />
        <Route path="/reset" component={ResetPassword} />
      </Route>
      <Route path="*" component={UserError}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
