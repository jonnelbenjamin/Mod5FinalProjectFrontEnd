import React from 'react'
import {fetchingDisasters, fetchingLocations} from '../Redux/actions'
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

  componentDidMount(){
    this.props.fetchingDisasters()
    this.props.fetchingLocations()
    this.findAreaInfo()
    }

  render(){
    return (
      <div>
      <h1>{this.state.areaInfo.active == false ? this.state.areaInfo.description + " hit the area" : "Warning: " + this.state.areaInfo.description + " in the area"}</h1>
      <h2>Location Information:</h2>
      <h3>Name: {this.state.locationInfo.name} <button>Follow</button></h3>
      <h3>Country GDP: ${this.state.locationInfo.country_gdp}</h3>
      <h3>Description: {this.state.locationInfo.description}</h3>
      <h2>Organizations Information</h2>
      <h3>Name: {this.state.orgInfo.name} <button>Follow</button></h3>
      <h3>Financial Need: ${this.state.orgInfo.financial_need}</h3>
      <h3>Description: {this.state.orgInfo.description}</h3>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    disasters: state.disasters,
    locations: state.locations
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingDisasters: () => {dispatch(fetchingDisasters())},
    fetchingLocations: () => {dispatch(fetchingLocations())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AreaInfo);
