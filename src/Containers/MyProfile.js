import React from 'react'
import MyOrgs from './MyOrgs'
import MyLocations from './MyLocations'

class MyProfile extends React.Component {
  render() {
    return (
      <div>
      <div><MyOrgs/></div>
      <div><MyLocations/></div>
      </div>
    )
  }
}

export default (MyProfile);
