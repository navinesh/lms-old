import axios from 'axios'

export const REQUEST_USER_RECORD = 'REQUEST_USER_RECORD'
export const RECEIVE_USER_RECORD = 'RECEIVE_USER_RECORD'
export const USER_RECORD_ERROR = 'USER_RECORD_ERROR'

export const requestUserRecord = (user_id) => ({
  type: REQUEST_USER_RECORD,
  user_id
});

export const userRecordError = (data) => ({
  type: USER_RECORD_ERROR,
  message: data.message
});

export const receiveUserRecord = (data) => ({
  type: RECEIVE_USER_RECORD,
  user_record: data.user_record
});

export const fetchUserRecord = (user_id) => {
  return dispatch => {
    dispatch(requestUserRecord(user_id))
    axios.post('user-record.api', {
        user_id: user_id
      })
      .then((response) => {
        if (response.status === 200){
          dispatch(userRecordError(response.data))
        }
        else {
          dispatch(receiveUserRecord(response.data))
        }
      })
  }
};
