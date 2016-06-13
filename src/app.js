import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import Main from './containers/main'
import configureStore from './stores/configureStore'
import LeaveCalendar from './components/leavecalendar'
import LoginBox from './components/login'

const store = configureStore()

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <Route path="leavecalendar" component={LeaveCalendar} />
        <Route path="login" component={LoginBox} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('body content')
)
