import axios from 'axios'

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'

export const LOGIN_USER_REQUEST_FROM_TOKEN = 'LOGIN_USER_REQUEST_FROM_TOKEN'
export const LOGIN_USER_SUCCESS_FROM_TOKEN = 'LOGIN_USER_SUCCESS_FROM_TOKEN'
export const LOGIN_USER_FAILURE_FROM_TOKEN = 'LOGIN_USER_FAILURE_FROM_TOKEN'

export function requestUserLogin(creds){
  return {
    type: LOGIN_USER_REQUEST,
    creds
  }
}

export function receiveUserLogin(data){
  return {
    type: LOGIN_USER_SUCCESS
  }
}

export function loginUserError(data){
  return {
    type: LOGIN_USER_FAILURE,
    message: data.message
  }
}

export function requestUserLoginFromToken(auth_token){
  return {
    type: LOGIN_USER_REQUEST_FROM_TOKEN,
    auth_token
  }
}

export function receiveUserLoginFromToken(data){
  return {
    type: LOGIN_USER_SUCCESS_FROM_TOKEN
  }
}

export function loginUserErrorFromToken(data){
  return {
    type: LOGIN_USER_FAILURE_FROM_TOKEN,
    message: data.message
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
          localStorage.setItem('auth_token', response.data.auth_token)
          localStorage.setItem('user_id', response.data.user_id)
          dispatch(receiveUserLogin())
        }
      })
  }
}

export function fetchLoginFromToken(auth_token) {
  return dispatch => {
    dispatch(requestUserLoginFromToken(auth_token))
    axios.post('usertoken', {
        auth_token: auth_token
      })
      .then((response) => {
        if (response.status === 200){
          dispatch(loginUserErrorFromToken(response.data))
          localStorage.removeItem('auth_token')
          localStorage.removeItem('user_id')
        }
        else {
          dispatch(receiveUserLoginFromToken())
        }
      })
  }
}
