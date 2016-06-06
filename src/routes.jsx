import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Main from './components/main.jsx';
import LeaveCalendar from './components/leavecalendar.jsx';
import LoginBox from './components/login.jsx';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>
)

export default routes;
