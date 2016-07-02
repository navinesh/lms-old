import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import configureStore from './stores/configureStore'

import Headercontainer from './containers/headercontainer'
import Main from './containers/main'
import LeaveCalendarContainer from './containers/leavecalendarcontainer'
import UserLoginBox from './containers/userlogincontainer'
import MainUserLoginBox from './containers/userloginbox'

const store = configureStore()

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Headercontainer}>
        <IndexRoute component={Main} />
        <Route path="/leavecalendar" component={LeaveCalendarContainer} />
        <Route path="/login" component={MainUserLoginBox} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
