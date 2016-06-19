import React, { Component } from 'react'
import LeaveCalendarContainer from './leavecalendarcontainer'
import UserLoginBox from './userlogincontainer'

export default class Main extends Component {
  render() {
    return (
      <div>
        <LeaveCalendarContainer />
        <UserLoginBox />
      </div>
    )
  }
}
