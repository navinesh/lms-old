import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaveCalendar from './leavecalendar'
import UserLogin from './userlogin'
import UserRecord from './userrecord'
import { fetchLoginFromToken } from '../actions/userlogin'

class Main extends Component {

  componentDidMount() {
    const { dispatch, auth_info } = this.props
    const auth_token = auth_info.auth_token;
    if (auth_token) {
      dispatch(fetchLoginFromToken(auth_token))
    }
  }

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
              <UserRecord />
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
    auth_info
  } = userAuth
  return {
    isAuthenticated,
    auth_info
  }
}

export default connect(mapStateToProps)(Main)
