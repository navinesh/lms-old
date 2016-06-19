import axios from 'axios'

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'

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
          localStorage.setItem('token', response.data.token)
          dispatch(receiveUserLogin(response.data))
        }
      })
  }
}
