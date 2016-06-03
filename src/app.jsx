import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import LoginBox from './login.jsx';
import LeaveCalendar from './leavecalendar.jsx';

class PageContent extends React.Component {
  render(){
    return (
      <div className="pageContent">
          <LeaveCalendar />
          <LoginBox />
      </div>
    );
  }
}

ReactDOM.render(<PageContent />, document.getElementById('body content'));
