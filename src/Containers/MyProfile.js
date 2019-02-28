import React from 'react'
import { connect } from 'react-redux'
import MyOrgs from './MyOrgs'

class MyProfile extends React.Component {
  render() {
    return (
      <div><MyOrgs/></div>
    )
  }
}

export default (MyProfile);
