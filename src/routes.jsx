import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from './components/main.jsx';
import LeaveCalendar from './components/leavecalendar.jsx';
import LoginBox from './components/login.jsx';

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}> 
    </Route>
  </Router>
)

export default routes;
