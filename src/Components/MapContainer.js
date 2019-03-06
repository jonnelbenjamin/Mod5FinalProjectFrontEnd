import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import {ReactDOM} from 'react-dom/server'
import { Segment, Button } from 'semantic-ui-react'
import APIkey from '../googlemapsAPIkey'
import InfoWindow from './InfoWindow'
import { connect } from 'react-redux'
import {fetchingDisasters, fetchingLocations} from '../Redux/actions'
import AreaInfo from './AreaInfo'

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

  // onMouseoverMarker = (props, marker, e) => {
  // this.setState({
  //   selectedPlace: props,
  //   activeMarker: marker,
  //   showingInfoWindow: true
  // })
  // }
  // onMouseover={this.onMouseoverMarker}

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
          key={disaster.id}
          active={disaster.active}
          description={disaster.description}
          name={disaster.location.name}
          position={{lat: disaster['latitude'], lng: disaster['longitude']}}
          onClick={this.onMarkerClick} />)}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div><h3>{this.state.selectedPlace.description} in {this.state.selectedPlace.name}</h3></div>
            <div><h3>{this.state.selectedPlace.active === true ? 'Warning: Active' : 'Not Active'}</h3></div>
          </InfoWindow>
      </Map>
      <div>
    {this.state.showingInfoWindow === false ? null : <Segment raised  id="segment"><AreaInfo
    selectedPlace={this.state.selectedPlace}/></Segment>}
    </div>
    
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
