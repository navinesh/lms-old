import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLeave } from '../actions/leavecalendaractions'
import LeaveCalendar from '../components/leavecalendar'

var Loader = require('halogen/PulseLoader');

class LeaveCalendarContainer extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchLeave())
  }

  render() {
    const { records, isFetching } = this.props
    return (
      <div className="LeaveCalendarContainer">
      {(isFetching ? <div className="offset-sm-5"><Loader color="#0275d8" size="12px" /></div> : <LeaveCalendar records={records} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {leaveRecords} = state
  const {
    isFetching,
    items: records
  } = leaveRecords
  return {
    records,
    isFetching
  }
}

export default connect(mapStateToProps)(LeaveCalendarContainer)
