import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchLogin } from '../actions/userloginactions'
import { logoutUser } from '../actions/userlogoutactions'
import Login from '../components/userlogin'
import Logout from '../components/userlogout'

var Loader = require('halogen/PulseLoader');

class UserLoginBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { dispatch, message, isAuthenticated } = this.props

    return (
      <div className="UserLoginBox">

      {!isAuthenticated &&
        <Login
        message={message}
        onLoginClick={ creds => dispatch(fetchLogin(creds)) } />
      }

      {isAuthenticated &&
        <Logout onLogoutClick={() => dispatch(logoutUser())} />
      }
      </div>
    )
  }
}

UserLoginBox.propTypes = {
  token: PropTypes.string,
  message: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  const {userAuth} = state
  const {
    isFetching,
    isAuthenticated,
    message
  } = userAuth
  return {
    message,
    isFetching,    
    isAuthenticated
  }
}

export default connect(mapStateToProps)(UserLoginBox)
