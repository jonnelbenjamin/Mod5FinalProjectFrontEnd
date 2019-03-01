import React from 'react'
import {fetchingDisasters, fetchingLocations} from '../Redux/actions'
import { connect } from 'react-redux'



class AreaInfo extends React.Component {

  state = {
    areaInfo: {}
  }

  findAreaInfo = () => {
    let locationName = this.props.selectedPlace.name
    this.props.disasters.find((disaster) => {
      if (disaster.location.name === locationName) {
        this.setState({
          areaInfo: disaster
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

      <div>"I'm the area info!"</div>
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
