import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Header extends Component {
  render(){
    const { isAuthenticated, onLogoutClick, children } = this.props
    return (
      <div className="Header">
        <nav className="navbar navbar-fixed-top">
          <div className="container">
            {!isAuthenticated &&
              <div className="nav navbar-nav">
                <Link className="nav-item nav-link" to="/">
                  Leave management system
                </Link>
              </div>
            }
            {isAuthenticated &&
              <div className="nav navbar-nav">
                <Link className="nav-item nav-link" to="/">
                  Leave management system
                </Link>
                <Link className="nav-item nav-link" to="/leavecalendar">
                  Leave calendar
                </Link>
                <button onClick={() => onLogoutClick()} className="btn btn-primary pull-xs-right">
                  Sign out
                </button>
              </div>
            }
          </div>
        </nav>
        {children}
      </div>
    );
  }
}

Header.propTypes = {
onLogoutClick: PropTypes.func.isRequired,
isAuthenticated: PropTypes.bool.isRequired
}
