import fetch from 'isomorphic-fetch'
import axios from 'axios'

export const REQUEST_LEAVE_CALENDAR = 'REQUEST_LEAVE_CALENDAR'
export const RECEIVE_LEAVE_CALENDAR = 'RECEIVE_LEAVE_CALENDAR'

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'
export const LOGOUT_USER = 'LOGOUT_USER'

// leave calendar API call actions
export function requestLeave() {
  return {
    type: REQUEST_LEAVE_CALENDAR,
  }
}

export function receiveLeave(json) {
  return {
    type: RECEIVE_LEAVE_CALENDAR,
    records: json.leave_records,
    receivedAt: Date.now()
  }
}

export function fetchLeave() {
  return dispatch => {
    dispatch(requestLeave())
    return fetch(`leave.api`)
      .then(response => response.json())
      .then(json => dispatch(receiveLeave(json)))
  }
}

// user signup actions
export function signUpUser(){
  return {
    type: SIGNUP_USER
  }
}

// user login/logout actions
export function requestUserLogin(creds){
  return {
    type: LOGIN_USER_REQUEST,
    creds
  }
}

export function receiveUserLogin(data){
  return {
    type: LOGIN_USER_SUCCESS,
    token: data.token
  }
}

export function loginUserError(data){
  return {
    type: LOGIN_USER_FAILURE,
    message: data.message
  }
}

export function logOutUser(){
  return {
    type: 'LOGOUT_USER'
  }
}

export function fetchLogin(creds) {
  return dispatch => {
    dispatch(requestUserLogin(creds))
    axios.post('userlogin', {
        email: creds.email,
        password: creds.password
      })
      .then((response) => {
        if (response.status === 200){
          dispatch(loginUserError(response.data))
        }
        else {
          dispatch(receiveUserLogin(response.data))
        }
      })
  }
}
