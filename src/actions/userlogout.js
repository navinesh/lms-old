export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST'
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS'

export const requestLogout = () => ({
  type: LOGOUT_USER_REQUEST
});

export const receiveLogout = () => ({
  type: LOGOUT_USER_SUCCESS
});

export const logoutUser = () => {
  return dispatch => {
    dispatch(requestLogout())
    dispatch(receiveLogout())
    localStorage.removeItem('auth_token')    
    dispatch({ type: 'CLEAR_USER_RECORD' })
    dispatch({ type: 'CLEAR_USER_DETAILS' })
  }
};
