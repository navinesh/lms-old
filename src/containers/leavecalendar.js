import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLeaveIfNeeded } from '../actions/leavecalendar'
import Leaves from '../components/leavecalendar'

const BeatLoader = require('halogen/BeatLoader');

class LeaveCalendar extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchLeaveIfNeeded())
  }

  render() {
    const { records, isFetching } = this.props
    return (
      <div className="LeaveCalendar">
        {isFetching ?
          <div className="offset-sm-5"><BeatLoader color="#0275d8" size="12px" /></div> :
          <Leaves records={records} />
        }
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

export default connect(mapStateToProps)(LeaveCalendar)
