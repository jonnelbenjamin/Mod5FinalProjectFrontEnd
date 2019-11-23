import React, { Component, useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Segment} from 'semantic-ui-react'
import APIkey from '../googlemapsAPIkey'
import InfoWindow from './InfoWindow'
import { connect } from 'react-redux'
import {fetchingDisasters, fetchingLocations} from '../Redux/actions'
import AreaInfo from './AreaInfo'
import Iframe from 'react-iframe'

import ReactMapGL from 'react-map-gl'

const mapStyles = {
  width: '100%',
  height: '100%',
  paddingBottom: '600px'
};
const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 10
  });

  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);


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
      <ReactMapGL {...viewport}></ReactMapGL>

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
