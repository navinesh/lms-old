import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchLogin } from '../actions/userloginactions'
import { logoutUser } from '../actions/userlogoutactions'
import Login from '../components/userlogin'
import Logout from '../components/userlogout'

var Loader = require('halogen/PulseLoader');

class UserLoginBox extends Component {
  render() {
    const { dispatch, message, isAuthenticated } = this.props
    return (
      <div className="UserLoginBox">
        {!isAuthenticated &&
          <Login
          message={message}
          onLoginClick={ creds => dispatch(fetchLogin(creds)) } />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {userAuth} = state
  const {
    isAuthenticated,
    message
  } = userAuth
  return {
    message,
    isAuthenticated
  }
}

export default connect(mapStateToProps)(UserLoginBox)
