import axios from 'axios'

export const REQUEST_USER_DETAILS = 'REQUEST_USER_DETAILS'
export const RECEIVE_USER_DETAILS = 'RECEIVE_USER_DETAILS'
export const USER_DETAILS_ERROR = 'USER_DETAILS_ERROR'

export const requestUserDetails = (user_id) => ({
  type: REQUEST_USER_DETAILS,
  user_id
});

export const userDetailsError = (data) => ({
  type: USER_DETAILS_ERROR,
  message: data.message
});

export const receiveUserDetails = (data) => ({
  type: RECEIVE_USER_DETAILS,
  user_detail: data.user_detail
});

export const fetchUserDetails = (user_id) => {
  return dispatch => {
    dispatch(requestUserDetails(user_id))
    axios.post('user-detail.api', {
        user_id: user_id
      })
      .then((response) => {
        if (response.status === 200){
          dispatch(userDetailsError(response.data))
        }
        else {
          dispatch(receiveUserDetails(response.data))
        }
      })
  }
};
