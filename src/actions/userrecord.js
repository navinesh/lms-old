import axios from 'axios'

export const REQUEST_USER_RECORD = 'REQUEST_USER_RECORD'
export const RECEIVE_USER_RECORD = 'RECEIVE_USER_RECORD'
export const USER_RECORD_ERROR = 'USER_RECORD_ERROR'

export const requestUserRecord = (userData) => ({
  type: REQUEST_USER_RECORD,
  userData
});

export const userRecordError = (data) => ({
  type: USER_RECORD_ERROR,
  message: data.message
});

export const receiveUserRecord = (data) => ({
  type: RECEIVE_USER_RECORD,
  user_record: data.user_record
});

export const fetchUserRecord = (userData) => {
  return dispatch => {
    dispatch(requestUserRecord(userData))
    axios({
      method: 'post',
      url: 'user-record.api',
      auth: { username: userData.auth_token },
      data: { user_id: userData.user_id }
      })
      .then((response) => {
        if (response.status === 200){
          dispatch(userRecordError(response.data))
        }
        else {
          dispatch(receiveUserRecord(response.data))
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }
};
