import React from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import UserChange from '../components/useraccount'
import { changePassword } from '../actions/changepassword'

const UserAccount = ({ dispatch, isAuthenticated, message, isFetching, auth_info }) => {
  return (
    <div className="ResetPassword">
      {isAuthenticated &&
        <div className="row">
          <div className="col-xs-12 col-sm-4 offset-sm-4">
            <UserChange
            isFetching={isFetching}
            message={message}
            auth_info={auth_info}
            onChangeClick={ creds => dispatch(changePassword(creds)) } />
          </div>
        </div>
      }
      {!isAuthenticated &&
        browserHistory.push('/')
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  const { changePassword } = state
  const { userAuth } = state
  const {
    isAuthenticated,
    auth_info
  } = userAuth
  const {
    isFetching,
    message
  } = changePassword

  return {
    isAuthenticated,
    auth_info,
    isFetching,
    message
  }
}

export default connect(mapStateToProps)(UserAccount)
