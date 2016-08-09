import { combineReducers } from 'redux'

import { REQUEST_LEAVE_CALENDAR, RECEIVE_LEAVE_CALENDAR } from '../actions/leavecalendaractions'
import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE,
        LOGIN_USER_REQUEST_FROM_TOKEN, LOGIN_USER_SUCCESS_FROM_TOKEN,
        LOGIN_USER_FAILURE_FROM_TOKEN } from '../actions/userloginactions'
import { LOGOUT_USER_SUCCESS } from '../actions/userlogoutactions'
import { REQUEST_USER_DETAILS, RECEIVE_USER_DETAILS, USER_DETAILS_ERROR } from '../actions/userdetailsactions'

function leaveRecords(state = {isFetching: false,
  items: []}, action) {
  switch (action.type) {
    case REQUEST_LEAVE_CALENDAR:
    return { ...state,
      isFetching: true}
    case RECEIVE_LEAVE_CALENDAR:
    return { ...state,
      isFetching: false,
      items: action.records,
      lastUpdated: action.receivedAt}
    default:
      return state
  }
}

function userAuth(state = {isFetching: false,
  isAuthenticated: localStorage.getItem('auth_token') ? true : false,
  message: ''}, action) {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
    return { ...state,
      isFetching: true,
      isAuthenticated: false}
    case LOGIN_USER_SUCCESS:
    return { ...state,
      isFetching: false,
      isAuthenticated: true,
      message: 'Login successful!'}
    case LOGIN_USER_FAILURE:
    return { ...state,
      isFetching: false,
      isAuthenticated: false,
      message: action.message}
    case LOGOUT_USER_SUCCESS:
    return { ...state,
      isFetching: false,
      isAuthenticated: false,
      message: ''}
    case LOGIN_USER_REQUEST_FROM_TOKEN:
    return { ...state,
      isFetching: true}
    case LOGIN_USER_SUCCESS_FROM_TOKEN:
    return { ...state,
      isFetching: false,
      isAuthenticated: true,
      message: 'Login successful!'}
    case LOGIN_USER_FAILURE_FROM_TOKEN:
    return { ...state,
      isFetching: false,
      isAuthenticated: false,
      message: action.message}
    default:
      return state
  }
}

function userDetails(state = {isFetching: false,
  userDetail: [], message: ''}, action) {
  switch (action.type) {
    case REQUEST_USER_DETAILS:
    return { ...state,
      isFetching: true}
    case RECEIVE_USER_DETAILS:
    return { ...state,
      isFetching: false,
      userDetail: action.user_detail}
    case USER_DETAILS_ERROR:
    return { ...state,
      isFetching: false,
      message: action.message}
    default:
      return state
  }
}

const rootReducer = combineReducers({
  leaveRecords,
  userAuth,
  userDetails
})

export default rootReducer
