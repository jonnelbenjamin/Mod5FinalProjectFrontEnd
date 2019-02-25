import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import APIkey from '../googlemapsAPIkey'
import InfoWindow from './InfoWindow'
import { connect } from 'react-redux'
import {fetchingDisasters, fetchingLocations} from '../Redux/actions'
import {Modal} from 'semantic-ui-react'

const mapStyles = {
  width: '100%',
  height: '100%',
  paddingBottom: '600px'
};

export class MapContainer extends Component {

  state = {
   showingInfoWindow: false,
   activeMarker: {},
   selectedPlace: {},
 };

 componentDidMount(){
   this.props.fetchingDisasters()
   this.props.fetchingLocations()
   }

 onMarkerClick = (props, marker, e) => {
     this.setState({
       selectedPlace: props,
       activeMarker: marker,
       showingInfoWindow: true
     })
   }


 onMapClicked = (props) => {
   if (this.state.showingInfoWindow) {
     this.setState({
       showingInfoWindow: false,
       activeMarker: null
     })
   }
 };

  render() {
    return (

      <div>
      <Map
        google={this.props.google}
        zoom={2.5}
        style={mapStyles}
        initialCenter={{
         lat: 0,
         lng: 0
       }}
       onClick={this.onMapClicked}>
       {this.props.disasters.map( disaster =>
        <Marker
          name={disaster.location.name}
          position={{lat: disaster['latitude'], lng: disaster['longitude']}}
          onClick={this.onMarkerClick} />)}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div><h3>{this.state.selectedPlace.name}</h3></div>
            <div><button>Click Here!</button></div>
          </InfoWindow>
      </Map>
      <Modal trigger={<button>Click</button>}/>
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

const WrappedContainer = GoogleApiWrapper({
  apiKey: (APIkey)
})(MapContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WrappedContainer);
