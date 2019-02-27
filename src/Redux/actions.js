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


const loggingOut = () => {
  return (dispatch) => {
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



// let x = data.find(location => location.name ===props.name)

export {fetchingDisasters, fetchingLocations, fetchingOrganizations, signedUp, signingUp, loggedIn, loggingIn, loggingOut}
