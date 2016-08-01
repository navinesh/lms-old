import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLogin } from '../actions/userloginactions'
import { logoutUser } from '../actions/userlogoutactions'
import Login from '../components/userlogin'

class UserLoginBox extends Component {
  render() {
    const { dispatch, message, isAuthenticated, isFetching } = this.props
    return (
      <div className="UserLoginBox">
        {!isAuthenticated &&
          <Login
          isFetching={isFetching}
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
    message,
    isFetching
  } = userAuth
  return {
    message,
    isAuthenticated,
    isFetching
  }
}

export default connect(mapStateToProps)(UserLoginBox)
