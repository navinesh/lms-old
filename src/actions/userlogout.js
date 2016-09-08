export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST'
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS'

export const requestLogout = () => ({
  type: LOGOUT_USER_REQUEST,
  isFetching: true,
  isAuthenticated: true
});

export const receiveLogout = () => ({
  type: LOGOUT_USER_SUCCESS,
  isFetching: false,
  isAuthenticated: false
});

export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout())
    dispatch(receiveLogout())
    localStorage.removeItem('auth_token')
    localStorage.removeItem('user_id')
  }
}
