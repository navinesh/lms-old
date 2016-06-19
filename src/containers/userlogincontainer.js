import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchLogin } from '../actions/userloginactions'
import LoginBox from '../components/userlogin'

var Loader = require('halogen/PulseLoader');

class UserLoginBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { dispatch, token, message, isFetching, isAuthenticated } = this.props

    return (
      <div className="UserLoginBox">

      {!isAuthenticated &&
        <LoginBox
        message={message}
        onLoginClick={ creds => dispatch(fetchLogin(creds)) } />
      }

      {isAuthenticated //&&
      //  <Logout onLogoutClick={() => dispatch(logoutUser())} />
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
  const {userLogin} = state
  const {
    isFetching,
    isAuthenticated,
    token: token,
    message
  } = userLogin
  return {
    token,
    message,
    isFetching,
    isAuthenticated
  }
}

export default connect(mapStateToProps)(UserLoginBox)
