import { combineReducers } from 'redux'

import { REQUEST_LEAVE_CALENDAR, RECEIVE_LEAVE_CALENDAR } from '../actions/leavecalendar'

import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE,
        LOGIN_USER_REQUEST_FROM_TOKEN, LOGIN_USER_SUCCESS_FROM_TOKEN,
        LOGIN_USER_FAILURE_FROM_TOKEN } from '../actions/userlogin'

import { LOGOUT_USER_SUCCESS } from '../actions/userlogout'

import { REQUEST_USER_DETAILS, RECEIVE_USER_DETAILS,
        USER_DETAILS_ERROR } from '../actions/userdetails'

import { LEAVE_APPLICATION_REQUEST, LEAVE_APPLICATION_SUCCESS,
        LEAVE_APPLICATION_FAILURE } from '../actions/leaveapplication'

import { REQUEST_PASSWORD_RESET, PASSWORD_RESET_SUCCESS,
        PASSWORD_RESET_ERROR } from '../actions/resetpassword'

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

function leaveApplication (state = {isFetching: false,
  message: ''}, action) {
  switch (action.type) {
    case LEAVE_APPLICATION_REQUEST:
    return { ...state,
      isFetching: true,
      message: ''}
    case LEAVE_APPLICATION_SUCCESS:
    return { ...state,
      isFetching: false}
    case LEAVE_APPLICATION_FAILURE:
    return { ...state,
      isFetching: false,
      message: action.message}
    default:
    return state
  }
}

function resetPassword(state = {isFetching: false,
  message: ''}, action) {
  switch (action.type) {
    case REQUEST_PASSWORD_RESET:
    return { ...state,
      isFetching: true}
    case PASSWORD_RESET_SUCCESS:
    return { ...state,
      isFetching: false,
      message: action.message}
    case PASSWORD_RESET_ERROR:
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
  userDetails,
  leaveApplication,
  resetPassword
})

export default rootReducer
