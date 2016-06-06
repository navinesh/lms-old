import React from 'react';

import LoginBox from './login.jsx';
import LeaveCalendar from './leavecalendar.jsx';

class Main extends React.Component {
  render(){
    return (
      <div className="pageContent">
          <LeaveCalendar />
          <LoginBox />
      </div>
    );
  }
}

export default Main;
