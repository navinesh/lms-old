import { combineReducers } from 'redux'
import { REQUEST_LEAVE_CALENDAR, RECEIVE_LEAVE_CALENDAR,
  LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER
  } from '../actions/actions'

function leaveRecords(state = {isFetching: false,
  items: []}, action) {
  switch (action.type) {
    case REQUEST_LEAVE_CALENDAR:
    return { ...state,
      isFetching: true}
    case RECEIVE_LEAVE_CALENDAR:
    return { ...state,
      isFetching: false,
      items: action.records,
      lastUpdated: action.receivedAt}
    default:
      return state
  }
}

function userLogin(state = {isFetching: false, isAuthenticated: false,
  token: '', message: ''}, action) {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
    return { ...state,
      isFetching: true,
      isAuthenticated: false}
    case LOGIN_USER_SUCCESS:
    return { ...state,
      isFetching: false,
      isAuthenticated: true,
      token: action.token}
      case LOGIN_USER_FAILURE:
      return { ...state,
        isFetching: false,
        isAuthenticated: false,
        message: action.message}
    default:
      return state
  }
}

const rootReducer = combineReducers({
  leaveRecords,
  userLogin
})

export default rootReducer
