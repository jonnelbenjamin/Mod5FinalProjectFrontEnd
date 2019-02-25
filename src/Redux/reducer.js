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

const reducer = combineReducers({
  disasters: fetchingDisastersReducer,
  locations: fetchingLocationsReducer,
  organizations: fetchingOrganizationsReducer
})

export default reducer;
