import fetch from 'isomorphic-fetch'

export const REQUEST_LEAVE_CALENDAR = 'REQUEST_LEAVE_CALENDAR'
export const RECEIVE_LEAVE_CALENDAR = 'RECEIVE_LEAVE_CALENDAR'

export function requestLeave() {
  return {
    type: REQUEST_LEAVE_CALENDAR,
  }
}

export function receiveLeave(json) {
  return {
    type: RECEIVE_LEAVE_CALENDAR,
    records: json.leave_records,
    receivedAt: Date.now()
  }
}

export function fetchLeave() {
  return dispatch => {
    dispatch(requestLeave())
    return fetch(`leave.api`)
      .then(response => response.json())
      .then(json => dispatch(receiveLeave(json)))
  }
}
