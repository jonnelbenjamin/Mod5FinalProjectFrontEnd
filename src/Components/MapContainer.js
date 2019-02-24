import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import APIkey from '../googlemapsAPIkey'
import InfoWindow from './InfoWindow'
import { connect } from 'react-redux'
import {fetchingDisasters} from '../Redux/actions'

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
        <Marker
          name={'Dolores Park'}
          position={{lat: 42, lng: -88}}
          onClick={this.onMarkerClick} />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div><h3>{this.state.selectedPlace.name}</h3></div>
          </InfoWindow>
      </Map>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    disasters: state.disasters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingDisasters: () => {dispatch(fetchingDisasters())}
  }
}

const WrappedContainer = GoogleApiWrapper({
  apiKey: (APIkey)
})(MapContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WrappedContainer);
