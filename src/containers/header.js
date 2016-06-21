import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { logoutUser } from '../actions/userlogoutactions'
import Logout from '../components/userlogout'

class Header extends Component {
  render(){
    const { isAuthenticated, dispatch } = this.props
    return (
      <div className="Header">
        <nav className="navbar navbar-fixed-top">
          <div className="container">
            <div className="nav navbar-nav">
              <a className="nav-item nav-link active" href="/"><h5>Leave management system</h5></a>
              <a className="nav-item nav-link pull-xs-right">
                {isAuthenticated &&
                  <Logout onLogoutClick={() => dispatch(logoutUser())} />
                }
              </a>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
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
