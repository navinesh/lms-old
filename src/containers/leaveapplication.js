import React, { Component } from 'react'
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
          <div className="container text-xs-center" style={{paddingTop: '100px'}}>
            <div className="col-sm-12">
              <h1 className="display-4">The site configured at this address does not contain the requested resource.</h1>
            </div>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { userAuth, leaveApplication } = state
  const { isAuthenticated } = userAuth
  const { isFetching, message } = leaveApplication

  return {
    message,
    isAuthenticated,
    isFetching
  }
}

export default connect(mapStateToProps)(LeaveApplication)
