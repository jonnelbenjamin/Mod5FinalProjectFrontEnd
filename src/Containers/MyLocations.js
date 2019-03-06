import React from 'react'
import {Divider, Icon, Header} from 'semantic-ui-react'
import {fetchingMyLocations} from '../Redux/actions'
import { connect } from 'react-redux'
import LocationInfo from '../Components/LocationInfo'


class MyLocations extends React.Component {

  componentDidMount() {

    // let userId = this.props.currentUser.user.id
    // the above code for userId breaks for some reason! Fix it tomorrow! Also found in AreaInfo.js
    this.props.fetchingMyLocations(1)

  }
  render(){
    return (
      <div>
      <React.Fragment>
      <Divider horizontal>
      <Header as='h4'>
        <Icon name='globe' />
        My Locations
        </Header>
        </Divider>
        <div className="orgCards">
          {this.props.followedLocations.map(location =>
          <LocationInfo
          id={location.locationId}
          name={location.locationName}
          gdp={location.locationGDP}
          description={location.locationDescription}
          image={location.locationImage}
          />
          )}
        </div>
        </React.Fragment>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    followedLocations: state.myLocation,
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingMyLocations: (userId) => {dispatch(fetchingMyLocations(userId))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyLocations);
