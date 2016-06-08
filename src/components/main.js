import React from 'react';

import LoginBox from './login.js';
import LeaveCalendar from './leavecalendar.js';

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
