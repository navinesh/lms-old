import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './login.jsx';
import LeaveCalendar from './leavecalendar.jsx';

class PageContent extends React.Component {
  render(){
    return (
      <div className="pageContent">
          <LeaveCalendar />
          <LoginForm />
      </div>
    );
  }
}

ReactDOM.render(<PageContent />, document.getElementById('body content'));
