import axios from 'axios'

export const LEAVE_APPLICATION_REQUEST = 'LEAVE_APPLICATION_REQUEST'
export const LEAVE_APPLICATION_SUCCESS = 'LEAVE_APPLICATION_SUCCESS'
export const LEAVE_APPLICATION_FAILURE = 'LEAVE_APPLICATION_FAILURE'

export function requestLeaveApplication(applicationDetails) {
  return {
    type: LEAVE_APPLICATION_REQUEST,
    applicationDetails
  }
}

export function receiveLeaveApplication(data) {
  return {
    type: LEAVE_APPLICATION_SUCCESS,
    message: data.message,
  }
}

export function leaveApplicationFailure(data){
  return {
    type: LEAVE_APPLICATION_FAILURE,
    message: data.message
  }
}

export function fetchLeaveApplication(applicationDetails) {
  return dispatch => {
    dispatch(requestLeaveApplication(applicationDetails))
    axios.post('applyforleave', {
      user_id: applicationDetails.user_id,
      leave: applicationDetails.leave,
      leaveType: applicationDetails.leaveType,
      dateFrom: applicationDetails.dateFrom,
      dateTo: applicationDetails.dateTo,
      supervisorEmail: applicationDetails.supervisorEmail,
      secretaryEmail: applicationDetails.secretaryEmail,
      reason: applicationDetails.reason,      
      })
      .then((response) => {
        if (response.status === 200){
          dispatch(leaveApplicationFailure(response.data))
        }
        else {
          dispatch(receiveLeaveApplication(response.data))
        }
      })
  }
}
