import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUserRecord } from '../actions/userrecord'
import UserRecord from '../components/userrecord'

var Loader = require('halogen/PulseLoader');

class UserRecords extends Component {
  componentDidMount() {
    const { dispatch, auth_info } = this.props
    const auth_token = auth_info.auth_token;
    const user_id = auth_info.user_id;
    if(auth_token || user_id) {
      const userData = { auth_token: auth_token, user_id: user_id }
      dispatch(fetchUserRecord(userData))
    }
    else {
      const auth_token_local = localStorage.getItem('auth_token')
      const user_id_local = localStorage.getItem('user_id')
      if(auth_token_local || user_id_local) {
        const userData = { auth_token: auth_token_local, user_id: user_id_local }
        dispatch(fetchUserRecord(userData))
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
