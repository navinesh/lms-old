import React, { Component } from 'react'
import { browserHistory} from 'react-router'
import { connect } from 'react-redux'
import { fetchLeaveApplication } from '../actions/leaveapplication'
import LeaveApplications from '../components/leaveapplication'

class LeaveApplication extends Component {
  render() {
    const { dispatch, message, isAuthenticated, isFetching } = this.props
    return (
      <div className="LeaveApplication">
        {isAuthenticated &&
          <LeaveApplications
          isFetching={isFetching}
          message={message}
          onLeaveApplicationClick={ applicationDetails => dispatch(fetchLeaveApplication(applicationDetails)) } />
        }
        {!isAuthenticated &&
          browserHistory.push('/')
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { userAuth, leaveApplication } = state
  const { isAuthenticated } = userAuth
  const { isFetching, message} = leaveApplication

  return {
    message,
    isAuthenticated,
    isFetching
  }
}

export default connect(mapStateToProps)(LeaveApplication)
