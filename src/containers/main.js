import React, { Component } from 'react'
import LeaveCalendarContainer from './leavecalendarcontainer'
import LoginBox from '../components/login'

export default class Main extends Component {
  render() {
    return (
      <div>
        <LeaveCalendarContainer />
        <LoginBox />
      </div>
    )
  }
}
