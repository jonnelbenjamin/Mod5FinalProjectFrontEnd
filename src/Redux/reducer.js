import { combineReducers } from 'redux'

const fetchingDisastersReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHED_DISASTERS":
    return action.disasters
    default:
    return state
  }
}

const fetchingLocationsReducer = (state = [], action) => {
  switch(action.type) {
    case "FETCHED_LOCATIONS":
    return action.locations
    default:
    return state
  }
}

const fetchingOrganizationsReducer = (state = [], action) => {
  switch(action.type) {
    case "FETCHED_ORGANIZATIONS":
    return action.organizations
    default:
    return state
  }
}

const loginReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return action.user
    case 'LOGGED_OUT':
      return null
    default:
      return state
  }
}

const errorReducer = (state = '', action) => {
  switch (action.type) {
    case "SIGN_UP_ERRORS":
      return action.errors
    default:
      return state
  }
}

const reducer = combineReducers({
  disasters: fetchingDisastersReducer,
  locations: fetchingLocationsReducer,
  organizations: fetchingOrganizationsReducer,
  currentUser: loginReducer,
  errors: errorReducer
})

export default reducer;
