import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUserDetailsIfNeeded } from '../actions/userdetails'
import { fetchUserRecord } from '../actions/userrecord'
import { UserRecordList, RecordList } from '../components/userrecord'

const BeatLoader = require('halogen/BeatLoader');
const PulseLoader = require('halogen/PulseLoader');

class UserRecords extends Component {
  componentDidMount() {
    const { dispatch, auth_info } = this.props
    let auth_token = auth_info.auth_token;
    if(auth_token) {
      dispatch(fetchUserDetailsIfNeeded(auth_token))
      dispatch(fetchUserRecord(auth_token))
    }
    else {
      auth_token= localStorage.getItem('auth_token')
      if(auth_token) {
        dispatch(fetchUserDetailsIfNeeded(auth_token))
        dispatch(fetchUserRecord(auth_token))
      }
    }
  }

  render() {
    const { isFetching, isRecordFetching, user_detail, user_record, message } = this.props
    return (
      <div className="UserDetailsContainer">
        <div className="row">
          {isFetching ? <div className="offset-sm-5">
            <BeatLoader color="#0275d8" size="12px" /></div> :
            <UserRecordList user_detail={user_detail} message={message} />
          }
          {isRecordFetching ? <div className="offset-sm-5" style={{paddingTop: '150px'}}>
            <PulseLoader color="#0275d8" size="12px" /></div> :
            <RecordList user_record={user_record} />
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {userRecords, userAuth, userDetails} = state
  const { auth_info} = userAuth
  const { isFetching, userDetail: user_detail } = userDetails
  const {
    isFetching: isRecordFetching,
    userRecord: user_record,
    message
  } = userRecords

  return {
    isFetching,
    isRecordFetching,
    user_record,
    message,
    auth_info,
    user_detail
  }
}

export default connect(mapStateToProps)(UserRecords)
