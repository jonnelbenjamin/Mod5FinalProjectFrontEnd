const fetchingDisasters = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/disasters')
    .then(res => res.json())
    .then(data => {
      dispatch({type: "FETCHED_DISASTERS", disasters: data})
    })
  }
}

export {fetchingDisasters}
