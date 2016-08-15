import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navs from '../components/header'
import { fetchLoginFromToken } from '../actions/userlogin'
import { logoutUser } from '../actions/userlogout'

class Header extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    const auth_token = localStorage.getItem('auth_token')
    if(!auth_token || auth_token === '') {
      return;
    }
      dispatch(fetchLoginFromToken(auth_token))
  }

  render(){
    const { isAuthenticated, dispatch, children } = this.props
    return (
      <Navs
        isAuthenticated={isAuthenticated}
        onLogoutClick={() => dispatch(logoutUser())}
        children={children} />
    );
  }
}

const mapStateToProps = (state) => {
  const {userAuth} = state
  const {
    isAuthenticated,
  } = userAuth
  return {
    isAuthenticated
  }
}

export default connect(mapStateToProps)(Header)
