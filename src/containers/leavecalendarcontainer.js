import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchLeave } from '../actions/leavecalendaractions'
import LeaveCalendar from '../components/leavecalendar'

var Loader = require('halogen/PulseLoader');

class LeaveCalendarContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchLeave())
  }

  render() {
    const { records, isFetching, lastUpdated } = this.props
    return (
      <div className="LeaveCalendarContainer">
      {(isFetching ? <div className="col-sm-8"><Loader color="#0275d8" size="15px" margin="4px" /></div> : <LeaveCalendar records={records} />)}
      </div>
    )
  }
}

LeaveCalendarContainer.propTypes = {
  records: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  const {leaveRecords} = state
  const {
    isFetching,
    lastUpdated,
    items: records
  } = leaveRecords
  return {
    records,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(LeaveCalendarContainer)
