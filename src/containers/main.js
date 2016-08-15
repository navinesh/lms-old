import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaveCalendar from './leavecalendar'
import UserLogin from './userlogin'
import UserDetail from './userdetails'

class Main extends Component {
  render() {
    const { isAuthenticated } = this.props
    return (
      <div className="Main">
        {!isAuthenticated &&
          <div className="row">
            <div className="col-sm-8">
              <LeaveCalendar />
            </div>
            <div className="col-sm-4">
              <UserLogin />
            </div>
          </div>
        }
        {isAuthenticated &&
          <div className="row">
            <div className="col-sm-12">
              <UserDetail />
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
