import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchLoginFromToken } from '../actions/userloginactions'
import Header from '../components/header'
import { logoutUser } from '../actions/userlogoutactions'
import LeaveCalendarContainer from './leavecalendarcontainer'

class Headercontainer extends Component {
  //componentDidMount() {
    //this.loadToken()
  //}

  loadToken() {
   const { dispatch } = this.props
   let auth_token = localStorage.getItem('auth_token')
   if(!auth_token || auth_token === '') {
     return;
   }
     dispatch(fetchLoginFromToken(auth_token))
  }

  render(){
    const { isAuthenticated, dispatch, children } = this.props
    return (
      <Header
        isAuthenticated={isAuthenticated}
        onLogoutClick={() => dispatch(logoutUser())}
        children={children} />
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

export default connect(mapStateToProps)(Headercontainer)
