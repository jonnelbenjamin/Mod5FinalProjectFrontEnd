import React, { useState, useEffect, Component } from 'react';
import { Segment} from 'semantic-ui-react'
import APIkey from '../mapboxAPIkey'
import InfoWindow from './InfoWindow'
import { connect } from 'react-redux'
import {fetchingDisasters, fetchingLocations} from '../Redux/actions'
import AreaInfo from './AreaInfo'
import Iframe from 'react-iframe'
import {useFetch} from '../Hooks/useFetch'


import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as parkDate from "./data/skateboard-parks.json";

 class MapContainer extends Component {

   state = {
     latitude: 18.448347,
       longitude: -20.793440,
       width: "98.8vw",
       height: "82.5vh",
       zoom: 1.5,
       selectedPark: null

   }
   componentDidMount(){
      this.props.fetchingDisasters()
      this.props.fetchingLocations()
      }


  // useEffect(() => {
  //   const listener = e => {
  //     if (e.key === "Escape") {
  //       setSelectedPark(null);
  //     }
  //   };
  //   window.addEventListener("keydown", listener);
  //
  //   return () => {
  //     window.removeEventListener("keydown", listener);
  //   };
  // }, []);

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }
render(){
  return (
    <div>
    <ReactMapGL
    {...this.state}
      mapboxApiAccessToken={APIkey}
      mapStyle="mapbox://styles/mapbox/satellite-v9"
      onViewportChange={x => {
        this.setState({latitude: x.latitude,
                     longitude: x.longitude,
                      width: x.width,
                      height: x.height,
                      zoom: x.zoom});
      }}
    >
      {this.props.disasters.map(disaster => (
        <Marker
          key={disaster.id}
          active={disaster.active}
          description={disaster.description}
          name={disaster.location.name}
          latitude={disaster['latitude']}
          longitude={disaster['longitude']}

        >
    <button
      className="marker-btn"
      src="./data/location.png"
      onClick={e => {
          e.persist()
          this.setState({selectedPark: disaster});}}
            ></button>
        </Marker>
      ))}

      {this.state.selectedPark ? (
        <Popup
          latitude={this.state.selectedPark['latitude']}
          longitude={this.state.selectedPark['longitude']}
          onClose={() => {
            this.setState({selectedPark: null});
          }}
        >
          <div>
            <h2>{this.state.selectedPark.location.name}</h2>
            <p>{this.state.selectedPark.location.description}</p>
          </div>
        </Popup>
      ) : null}

    </ReactMapGL>
    </div>

  );
}}


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

export default connect(mapStateToProps,mapDispatchToProps)(MapContainer);
