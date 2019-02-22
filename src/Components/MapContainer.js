import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import APIkey from '../googlemapsAPIkey'

const mapStyles = {
  width: '100%',
  height: '100%',
  paddingBottom: '600px'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={2.5}
        style={mapStyles}
        initialCenter={{
         lat: 0,
         lng: 0
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (APIkey)
})(MapContainer)
