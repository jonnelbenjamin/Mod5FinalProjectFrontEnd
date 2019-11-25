import React, {useState,useEffect} from 'react'

function useFetch(url, initialState){
const [disasters, setDisasters] = useState([]);
useEffect(() => {
  fetch(url)
  .then(r=>r.json())
  .then(data => () => {setDisasters(data)})
},[])


return disasters
}

export {useFetch}
