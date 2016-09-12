import axios from 'axios'

export const REQUEST_USER_DETAILS = 'REQUEST_USER_DETAILS'
export const RECEIVE_USER_DETAILS = 'RECEIVE_USER_DETAILS'
export const USER_DETAILS_ERROR = 'USER_DETAILS_ERROR'

export const requestUserDetails = (userData) => ({
  type: REQUEST_USER_DETAILS,
  userData
});

export const userDetailsError = (data) => ({
  type: USER_DETAILS_ERROR,
  message: data.message
});

export const receiveUserDetails = (data) => ({
  type: RECEIVE_USER_DETAILS,
  user_detail: data.user_detail
});

export const fetchUserDetails = (userData) => {
  return dispatch => {
    dispatch(requestUserDetails(userData))
    axios({
      method: 'post',
      url: 'user-detail.api',
      auth: { username: userData.auth_token },
      data: { user_id: userData.user_id }
      })
      .then((response) => {
        if (response.status === 200){
          dispatch(userDetailsError(response.data))
        }
        else {
          dispatch(receiveUserDetails(response.data))
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }
};
