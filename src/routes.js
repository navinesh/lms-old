import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Main from './components/main.js';
import LeaveCalendar from './components/leavecalendar.js';
import LoginBox from './components/login.js';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="leavecalendar" component={LeaveCalendar} />
      <Route path="login" component={LoginBox} />
    </Route>
  </Router>
)

export default routes;
