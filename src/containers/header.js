import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchLoginFromToken } from '../actions/userloginactions'
import { logoutUser } from '../actions/userlogoutactions'
import LeaveCalendarContainer from './leavecalendarcontainer'

class Header extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    let auth_token = localStorage.getItem('auth_token')
    {auth_token &&
      dispatch(fetchLoginFromToken(auth_token))
    }
  }

  render(){
    const { isAuthenticated, dispatch } = this.props
    return (
      <div className="Header">
        <nav className="navbar navbar-fixed-top">
          <div className="container">
            <div className="nav navbar-nav">
              <Link className="nav-item nav-link active" to="/"><h5>Leave management system</h5></Link>
              {isAuthenticated &&
                <Link className="nav-item nav-link" to="/leavecalendar">
                  Leave calendar
                </Link>
              }
              {isAuthenticated &&
                <button className="btn btn-primary pull-xs-right" onClick={() => dispatch(logoutUser())}>
                  Sign out
                </button>
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
