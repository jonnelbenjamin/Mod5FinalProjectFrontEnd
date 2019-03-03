import React from 'react'
import {fetchingDisasters, fetchingLocations, AddingToFollowOrganization, AddingToFollowLocation, deletingFromFollowedLocations} from '../Redux/actions'
import { connect } from 'react-redux'



class AreaInfo extends React.Component {

  state = {
    areaInfo: {},
    locationInfo: {},
    orgInfo: {}

  }

  findAreaInfo = () => {
    let locationName = this.props.selectedPlace.name
    this.props.disasters.find((disaster) => {
      if (disaster.location.name === locationName) {
        this.setState({
          areaInfo: disaster,
          locationInfo: disaster.location,
          orgInfo: disaster.organizations[0]
        })
      }
    })
  }

  followOrganizations = (idOrg) => {
    // let userId = this.props.currentUser.id
    // Need to fix this problem above as is found on MyOrgs.js
    let userId = 1
    let orgId = idOrg

    this.props.addingToFollowOrganization(userId, orgId)

    console.log(userId)
    console.log(orgId)
  }

  followLocations = (locationId) => {
    // userId needs a fix as referenced in #followOrganizations function above
    let userId = 1
    this.props.addingToFollowLocation(userId, locationId)
  }

  componentDidMount(){
    this.props.fetchingDisasters()
    this.props.fetchingLocations()
    this.findAreaInfo()
    }

  unfollowLocation = (locationId) => {
    this.props.deletingFromFollowedLocations(locationId)
  }

  render(){
    return (
      <div>
      <h1>{this.state.areaInfo.active == false ? this.state.areaInfo.description + " hit the area" : "Warning: " + this.state.areaInfo.description + " in the area"}</h1>
      <h2>Location Information:</h2>
      <h3>Name: {this.state.locationInfo.name} <button onClick={() => this.followLocations(this.state.locationInfo.id)}>Follow</button>
      <button onClick={() => this.unfollowLocation(this.state.locationInfo.id)}>Unfollow</button>
      <button>Go</button></h3>
      <h3>Country GDP: ${this.state.locationInfo.country_gdp}</h3>
      <h3>Description: {this.state.locationInfo.description}</h3>
      <h2>Organizations Information</h2>
      <h3>Name: {this.state.orgInfo.name} <button onClick={() => this.followOrganizations(this.state.orgInfo.id)}>Follow</button></h3>
      <h3>Financial Need: ${this.state.orgInfo.financial_need}</h3>
      <button>Give</button>
      <h3>Description: {this.state.orgInfo.description}</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    disasters: state.disasters,
    locations: state.locations,
    currentUser: state.currentUser,
    followOrganizations: state.AddingToFollowOrganization,
    followLocations: state.AddingToFollowLocation
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingDisasters: () => {dispatch(fetchingDisasters())},
    fetchingLocations: () => {dispatch(fetchingLocations())},
    addingToFollowOrganization: (userId, orgId) => {dispatch(AddingToFollowOrganization(userId, orgId))},
    addingToFollowLocation: (userId, locationId) => {dispatch(AddingToFollowLocation(userId, locationId))},
    deletingFromFollowedLocations: (locationId) => {dispatch(deletingFromFollowedLocations(locationId))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AreaInfo);
