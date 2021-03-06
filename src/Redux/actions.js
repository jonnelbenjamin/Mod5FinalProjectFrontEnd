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
      debugger
      fetch(`http://localhost:3000/users`, {
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
         debugger
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

    const deletingFromFollowedOrganizations = (orgId) => {
      return (dispatch) => {
        fetch(`http://localhost:3000/follow_organizations/${orgId}`, {
          method: "DELETE"
        }
      ).then(res => res.json())
      .then(org => dispatch(deleteFromFollowedOrganizations(org)))
      }
    }

    const deleteFromFollowedOrganizations = (org) => {
      return { type: "DELETE_ORG", org}
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

  const AddingToFollowLocation = (userId, locationId) => {

    return (dispatch) => {
      let token = localStorage.getItem('token')

    fetch(`http://localhost:3000/follow_locations`, {
       method:"POST",
       headers: {
         "Authentication": `Bearer ${token}`,
         "Content-type":"application/json",
       },
       body: JSON.stringify({
         user_id: userId,
         location_id: locationId
       })
       }).then(res => res.json())
        .then(data => dispatch(addedToFolowedLocations(data)))
      }
    }

    const addedToFolowedLocations = (data) => {
      return { type: "ADD_TO_FOLLOWED_LOCATION", data}
    }

    const deletingFromFollowedLocations = (locationId) => {
      return (dispatch) => {
        fetch(`http://localhost:3000/follow_locations/${locationId}`, {
          method: "DELETE"
        }
      ).then(res => res.json())
      .then(location => dispatch(deleteFromFollowedLocations(location)))
      }
    }

    const deleteFromFollowedLocations = (location) => {
      return { type: "DELETE_LOCATION", location }
    }

    const fetchingMyLocations = (userId) => {
      return (dispatch) => {
        fetch(`http://localhost:3000/users/${userId}`)
        .then(res => res.json())
        .then(data => {

          dispatch({type: "FETCHED_MY_LOCATIONS", data})
      })
      }
    }

    const givingToOrganization = (donationAmount, orgId) => {
      let token = localStorage.getItem('token')

      return (dispatch) => {

         fetch('http://localhost:3000/user_organizations/give', {
          method:"POST",
          headers: {
            "Authentication": `Bearer ${token}`,
            "Content-type":"application/json",
          },
          body: JSON.stringify({
            donation_amount: donationAmount,
            donation_service: true,
            direct_service: false,
            number_of_days_going: null,
            organization_id: orgId
          })
          }).then(res => res.json())
           .then(data => dispatch(giveToOrganization(data)))
           .then(() => {
             fetch(`http://localhost:3000/organizations/${orgId}`, {
               method: "PUT",
               header: {
                 "Authentication": `Bearer ${token}`,
                 "Content-type":"application/json",
               },
               body: JSON.stringify({organization:{
                 donation_amount: donationAmount
               }})
             }).then(res => res.json())
             .then(data => dispatch(updateOrganizationFinancialNeed(data)))
             .then(alert('Thank you for donating!'),
             document.getElementById('donationModal').innerHTML = "")
           }
           )

         }
       }

       const giveToOrganization = (data) => {
         return { type: "GIVE_TO_ORGANIZATION", data }
       }



       const updateOrganizationFinancialNeed = (data) => {
         return { type: "UPDATE_ORGANIZATION_NEED", data }
       }

       const goingWithOrganization = (numberOfDays, orgId) => {
         let token = localStorage.getItem('token')
         return (dispatch) => {

            fetch('http://localhost:3000/user_organizations/go', {
             method:"POST",
             headers: {
               "Authentication": `Bearer ${token}`,
               "Content-type":"application/json",
             },
             body: JSON.stringify({
               donation_amount: null,
               donation_service: false,
               direct_service: true,
               number_of_days_going: numberOfDays,
               organization_id: orgId
             })
           })
             .then(res => res.json())
             .then(data => dispatch(goWithOrganization(data)))
             .then(alert('Application accepted! Your flight ticket has been purchased. Security will intercept you on the ground with further instructions.'))
}}

const goWithOrganization = (data) => {
  return { type: "GO_WITH_ORGANIZATION", data}
}


export {fetchingDisasters, fetchingLocations, fetchingOrganizations, signedUp, signingUp, loggedIn, loggingIn, loggingOut, AddingToFollowLocation, deletingFromFollowedLocations, fetchingMyLocations, AddingToFollowOrganization, deletingFromFollowedOrganizations, fetchingMyOrganizations, givingToOrganization, goingWithOrganization, stayLoggedInOnRefresh}
