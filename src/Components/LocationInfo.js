import React from 'react'
import { connect } from 'react-redux'
import {AddingToFollowLocation, deletingFromFollowedLocations} from '../Redux/actions'

class LocationInfo extends React.Component {

  followLocations = (locationId) => {
    // userId needs a fix as referenced in #followOrganizations function above
    let userId = 1
    this.props.addingToFollowLocation(userId, locationId)
  }

  unfollowLocation = (e, locationId) => {
    this.props.deletingFromFollowedLocations(locationId)
    e.target.parentElement.parentElement.parentElement.innerHTML = ""
  }


  render(){
return(
  <div className="cardInfo" id={this.props.id}>
      <img src={this.props.image} alt=""></img>
      <div className="cardStuff">
      <h1 className="orgHeaderName">{this.props.name}</h1>
      <h4>{this.props.description}</h4>
      <h3>{"Country GDP: $" + this.props.gdp}</h3>
      <div class="ui buttons">
      <button className="ui green button" onClick={() => this.followLocations(this.props.id)}>Follow</button>
      <div class="or"></div>
      <button className="ui toggle button" onClick={(e) => this.unfollowLocation(e, this.props.id)}>Unfollow</button>
      </div>
      </div>
  </div>
)
}
}

const mapStateToProps = (state) => {
  return {
    followLocations: state.AddingToFollowLocation,
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addingToFollowLocation: (userId, locationId) => {dispatch(AddingToFollowLocation(userId, locationId))},
    deletingFromFollowedLocations: (locationId) => {dispatch(deletingFromFollowedLocations(locationId))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationInfo);
