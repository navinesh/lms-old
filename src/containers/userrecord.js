import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUserRecord } from '../actions/userrecord'
import UserRecord from '../components/userrecord'

var Loader = require('halogen/PulseLoader');

class UserRecords extends Component {
  componentDidMount() {
    const { dispatch, auth_info } = this.props
    let auth_token = auth_info.auth_token;
    if(auth_token) {
      dispatch(fetchUserRecord(auth_token))
    }
    else {
      auth_token = localStorage.getItem('auth_token')
      if(auth_token) {
        dispatch(fetchUserRecord(auth_token))
      }
    }
  }

  render() {
    const { isFetching, user_record, message } = this.props
    return (
      <div className="UserDetailsContainer">
      {(isFetching ? <div className="offset-sm-5">
      <Loader color="#0275d8" size="12px" /></div> :
      <UserRecord user_record={user_record} message={message} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {userRecords, userAuth} = state
  const { auth_info} = userAuth
  const {
    isFetching,
    userRecord: user_record,
    message
  } = userRecords

  return {
    isFetching,
    user_record,
    message,
    auth_info
  }
}

export default connect(mapStateToProps)(UserRecords)
