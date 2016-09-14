import React, { Component } from 'react'
import { browserHistory} from 'react-router'
import { connect } from 'react-redux'
import { fetchUserDetails } from '../actions/userdetails'
import { fetchLeaveApplication } from '../actions/leaveapplication'
import LeaveApplications from '../components/leaveapplication'

class LeaveApplication extends Component {
  componentDidMount() {
    const { dispatch, auth_info } = this.props
    const auth_token = auth_info.auth_token;
    const user_id = auth_info.user_id;
    if (auth_token || user_id) {
      const userData = { auth_token: auth_token, user_id: user_id }
      dispatch(fetchUserDetails(userData))
    }
    else {
      const auth_token_local = localStorage.getItem('auth_token')
      const user_id_local = localStorage.getItem('user_id')
      if (auth_token_local || user_id_local) {
        const userData = { auth_token: auth_token_local, user_id: user_id_local }
        dispatch(fetchUserDetails(userData))
      }
    }
  }

  render() {
    const { dispatch, message, isAuthenticated, isFetching, user_detail } = this.props
    return (
      <div className="LeaveApplication">
        {isAuthenticated &&
          <LeaveApplications
          isFetching={isFetching}
          message={message}
          user_detail={user_detail}
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
  const { userAuth, leaveApplication, userDetails } = state
  const { isAuthenticated, auth_info } = userAuth
  const { isFetching, message} = leaveApplication
  const { userDetail: user_detail } = userDetails

  return {
    message,
    isAuthenticated,
    isFetching,
    auth_info,
    user_detail
  }
}

export default connect(mapStateToProps)(LeaveApplication)
