import React from 'react'
import { connect } from 'react-redux'
import {AddingToFollowLocation, deletingFromFollowedLocations} from '../Redux/actions'
import { Card, Button } from 'semantic-ui-react'

class LocationInfo extends React.Component {

  followLocations = (locationId) => {
    // userId needs a fix as referenced in #followOrganizations function above
    let userId = 1
    this.props.addingToFollowLocation(userId, locationId)
  }

  unfollowLocation = (locationId) => {
    this.props.deletingFromFollowedLocations(locationId)
  }


  render(){
return(
  <div>
    <Card
      id={this.props.id}
      centered
      column={2}
      raised
      >
      <h1>{this.props.name}</h1>
      <h2>{this.props.description}</h2>
      <h3>{"Country GDP: $" + this.props.gdp}</h3>
      <div class="ui buttons">
      <button className="ui green button" onClick={() => this.followLocations(this.props.id)}>Follow</button>
      <div class="or"></div>
      <button className="ui toggle button" onClick={() => this.unfollowLocation(this.props.id)}>Unfollow</button>
      </div>
    </Card>
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
