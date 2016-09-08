import fetch from 'isomorphic-fetch'

export const REQUEST_LEAVE_CALENDAR = 'REQUEST_LEAVE_CALENDAR'
export const RECEIVE_LEAVE_CALENDAR = 'RECEIVE_LEAVE_CALENDAR'

export const requestLeave = () => ({
  type: REQUEST_LEAVE_CALENDAR
});

export const receiveLeave = (json) => ({
  type: RECEIVE_LEAVE_CALENDAR,
  records: json.leave_records,
  receivedAt: Date.now()
});

export const fetchLeave = () => {
  return dispatch => {
    dispatch(requestLeave())
    return fetch(`leave.api`)
      .then(response => response.json())
      .then(json => dispatch(receiveLeave(json)))
  }
};
