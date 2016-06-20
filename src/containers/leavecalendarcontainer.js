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
    const { records, isFetching } = this.props
    return (
      <div className="LeaveCalendarContainer">
      {(isFetching ? <div className="col-sm-offset-5"><Loader color="#0275d8" size="16px" margin="4px" /></div> : <LeaveCalendar records={records} />)}
      </div>
    )
  }
}

LeaveCalendarContainer.propTypes = {
  records: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
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
