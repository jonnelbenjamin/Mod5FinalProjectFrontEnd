import { combineReducers } from 'redux'

const fetchingDisastersReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHED_DISASTERS":
    return action.disasters
    default:
    return state
  }
}

const reducer = combineReducers({
  disasters: fetchingDisastersReducer
})

export default reducer;
