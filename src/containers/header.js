import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { logoutUser } from '../actions/userlogoutactions'
import LeaveCalendarContainer from './leavecalendarcontainer'

class Header extends Component {
  render(){
    const { isAuthenticated, dispatch } = this.props
    return (
      <div className="Header">
        <nav className="navbar navbar-fixed-top">
          <div className="container">
            <div className="nav navbar-nav">
              <Link className="nav-item nav-link active" to="/"><h5>Leave management system</h5></Link>
              {isAuthenticated &&
                <button className="btn btn-link pull-xs-right" onClick={() => dispatch(logoutUser())}>
                  Sign out
                </button>
              }
              {isAuthenticated &&
                <Link className="nav-item nav-link pull-xs-right" to="/leavecalendar">
                  Leave calendar
                </Link>
              }
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
