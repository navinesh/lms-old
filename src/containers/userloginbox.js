import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import LeaveCalendarContainer from './leavecalendarcontainer'
import UserLoginBox from './userlogincontainer'

class MainUserLoginBox extends Component {
  render() {
    const { isAuthenticated } = this.props
    return (
      <div className="MainView">
        {!isAuthenticated &&
          <div className="row">
            <div className="col-sm-offset-4 col-sm-4">
              <UserLoginBox />
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

export default connect(mapStateToProps)(MainUserLoginBox)
