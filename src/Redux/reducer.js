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

const followOrganizationReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_FOLLOWED_ORGANIZATION":
      return action
    case "DELETE_ORG":
      return action.org
    default:
      return state
  }
}

const followLocationReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_FOLLOWED_LOCATION":
      return action.data
    case "DELETE_LOCATION":
      return action.location
    default:
      return state
  }
}

const fetchingMyOrganizationsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHED_MY_ORGANIZATIONS":
      return action.data.followingOrganizations
    default:
      return state
  }
}

const fetchingMyLocationsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHED_MY_LOCATIONS":
      return action.data.followingLocations
    default:
      return state
  }
}

const serviceToOrganizationReducer = (state = [], action) => {
  switch (action.type) {
    case "GIVE_TO_ORGANIZATION":
      return action
    case "UPDATE_ORGANIZATION_NEED":
      return action.data
    case "GO_WITH_ORGANIZATION":
      return action.data
    default:
      return state
  }
}

const reducer = combineReducers({
  disasters: fetchingDisastersReducer,
  locations: fetchingLocationsReducer,
  organizations: fetchingOrganizationsReducer,
  currentUser: loginReducer,
  errors: errorReducer,
  followOrganization: followOrganizationReducer,
  myOrganization: fetchingMyOrganizationsReducer,
  followLocation: followLocationReducer,
  myLocation: fetchingMyLocationsReducer,
  serviceToOrganization: serviceToOrganizationReducer
})

export default reducer;
