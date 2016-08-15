import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUserDetails } from '../actions/userdetails'
import UserDetails from '../components/userdetails'

var Loader = require('halogen/PulseLoader');

class UserDetail extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    const user_id = localStorage.getItem('user_id')
    dispatch(fetchUserDetails(user_id))
  }

  render() {
    const { isFetching, user_detail, message } = this.props
    return (
      <div className="UserDetailsContainer">
      {(isFetching ? <div className="offset-sm-5">
      <Loader color="#0275d8" size="12px" /></div> :
      <UserDetails user_detail={user_detail} message={message} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {userDetails} = state
  const {
    isFetching,
    userDetail: user_detail,
    message
  } = userDetails
  return {
    isFetching,
    user_detail,
    message
  }
}

export default connect(mapStateToProps)(UserDetail)
