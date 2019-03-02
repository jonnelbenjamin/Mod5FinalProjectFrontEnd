const fetchingDisasters = () => {
  console.log('fetchingDisasters')
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

const loggingIn = (userObj) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/login`, {
       method:"POST",
       headers: {
         "Content-type":"application/json",
       },
       body: JSON.stringify({user: userObj})
       }).then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.error){
            alert('Incorrect email and/or password')
          } else {
            console.log('Login Successful')
            dispatch(loggedIn(data.user_info))
            localStorage.setItem('token', data.token)

          }
       }
     )}
     }

  const stayLoggedInOnRefresh = () => {
    return (dispatch) => {
      let token = localStorage.getItem('token')
      fetch('http://localhost:3000/profile', {
        method: "GET",
        headers: {
          "Authentication": `Bearer ${token}`
        }
      })
      .then(r => r.json())
      .then(user_info => {
        dispatch(loggedIn(user_info))
        console.log(user_info)
      })
    }
  }


const loggingOut = () => {
  return (dispatch) => {
    localStorage.clear()
    dispatch({ type: "LOGGED_OUT" })
  }
}

const loggedIn = (user) =>  {
  return { type:"LOGGED_IN", user }
  }

  const signingUp = (userObj) => {
    return (dispatch) => {
      fetch(`http://localhost:3001/users`, {
         method:"POST",
         headers: {
           "Content-type":"application/json",
         },
         body: JSON.stringify(userObj)
         }).then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.error) {
              dispatch(showErrors((data.error)))
            } else {
              console.log('Sign Up Successful')
              dispatch(signedUp(data.user_info))
            }
         })}
       }

       const showErrors = (errors) => {
         return { type: "SIGN_UP_ERRORS", errors }
       }

        const signedUp = (user) =>  {
          localStorage.setItem('token', user.token)
          return { type:"LOGGED_IN", user }
         }

  const AddingToFollowOrganization = (userId, orgId) => {
    return (dispatch) => {
      let token = localStorage.getItem('token')
    fetch(`http://localhost:3000/follow_organizations`, {
       method:"POST",
       headers: {
         "Authentication": `Bearer ${token}`,
         "Content-type":"application/json",
       },
       body: JSON.stringify({
         user_id: userId,
         organization_id: orgId
       })
       }).then(res => res.json())
        .then(data => dispatch(addedToFolowedOrganizations(data)))
      }
    }

    const addedToFolowedOrganizations = (data) => {
      return { type: "ADD_TO_FOLLOWED_ORGANIZATION", data}
    }

  const fetchingMyOrganizations = (userId) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        dispatch({type: "FETCHED_MY_ORGANIZATIONS", data})
    })
    }
  }



export {fetchingDisasters, fetchingLocations, fetchingOrganizations, signedUp, signingUp, loggedIn, loggingIn, loggingOut, AddingToFollowOrganization, fetchingMyOrganizations, stayLoggedInOnRefresh}
