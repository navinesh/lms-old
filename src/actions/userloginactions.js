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
    auth_token: data.auth_token,
    user_id: data.user_id
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
          localStorage.setItem('auth_token', response.data.auth_token)
          localStorage.setItem('user_id', response.data.user_id)
          dispatch(receiveUserLogin(response.data))
        }
      })
  }
}
