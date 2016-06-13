import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchLeave } from '../actions/actions'
import LeaveCalendar from '../components/leavecalendar'
import LoginBox from '../components/login'
var Loader = require('halogen/PulseLoader');

class Main extends Component {
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
      <div className="Main">
      {(isFetching ? <div className="col-sm-8"><Loader color="#0088cc" size="15px" margin="4px" /></div> : <LeaveCalendar records={records} />)}
      <LoginBox />
      </div>
    )
  }
}

Main.propTypes = {
  records: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
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

export default connect(mapStateToProps)(Main)
