import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import LeaveCalendarContainer from './leavecalendarcontainer'
import UserLoginBox from './userlogincontainer'
import Header from './header'

class Main extends Component {
  render() {
    const { isAuthenticated } = this.props
    return (
      <div className="Main">
        {!isAuthenticated &&
          <div className="row">
            <div className="col-sm-8">
              <LeaveCalendarContainer />
            </div>
            <div className="col-sm-4">
              <UserLoginBox />
            </div>
          </div>
        }
        {isAuthenticated &&
          <div className="row">
            <div className="col-sm-12">
              <LeaveCalendarContainer />
          </div>
        </div>
        }
      </div>
    )
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

export default connect(mapStateToProps)(Main)
