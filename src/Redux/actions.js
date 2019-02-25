const fetchingDisasters = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/disasters')
    .then(res => res.json())
    .then(data => {
      dispatch({type: "FETCHED_DISASTERS", disasters: data})
    })
  }
}

const fetchingLocations = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/locations')
    .then(res => res.json())
    .then(data => {
      dispatch({type: "FETCHED_LOCATIONS", locations: data})
  })
  }
}

const fetchingOrganizations = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/organizations')
    .then(res => res.json())
    .then(data => {
      dispatch({type: "FETCHED_ORGANIZATIONS", organizations: data})
    })
  }
}
// let x = data.find(location => location.name ===props.name)

export {fetchingDisasters, fetchingLocations, fetchingOrganizations}
