import { combineReducers } from 'redux'
import { REQUEST_LEAVE_CALENDAR, RECEIVE_LEAVE_CALENDAR } from '../actions/actions'

function leaveRecords(state = {isFetching: false,
  items: []}, action) {
  switch (action.type) {
    case REQUEST_LEAVE_CALENDAR:
    return Object.assign({}, state, {
      isFetching: true
    })
    case RECEIVE_LEAVE_CALENDAR:
    return Object.assign({}, state, {
      isFetching: false,
      items: action.records,
      lastUpdated: action.receivedAt
    })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  leaveRecords
})

export default rootReducer
