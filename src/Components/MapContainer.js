import React, { useState, useEffect } from 'react';
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

 const MapContainer = ()=> {

let URL = 'http://localhost:3000/disasters'
const [hasError, setErrors] = useState(false);
const [selectedPark, setSelectedPark] = useState(null);
const [disasters, setDisasters] = useState([]);
let disastersFetch = useFetch(URL, [])


useEffect(() => {
   setDisasters(disastersFetch)
 },[disastersFetch]);

  const [viewport, setViewport] = useState({
    latitude: 18.448347,
    longitude: -20.793440,
    width: "98.8vw",
    height: "82.5vh",
    zoom: 1.5
  });

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

 const onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }

  return (
    <div>
    <ReactMapGL
    {...viewport}
      mapboxApiAccessToken={APIkey}
      mapStyle="mapbox://styles/mapbox/satellite-v9"
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
    >


    </ReactMapGL>
    </div>

  );
}
// <ReactMapGL>
//   // {this.props.disasters.map(disaster => (
//   //   <Marker
//   //     key={disaster.id}
//   //     active={disaster.active}
//   //     description={disaster.description}
//   //     name={disaster.location.name}
//   //     latitude={disaster['latitude']}
//   //     longitude={disaster['longitude']}
//   //     onClick={this.onMarkerClick}
//   //   >
// <button
//   className="marker-btn"
//     onClick={e => {
//         e.preventDefault();
//         setSelectedPark(e);}}
//         ></button>
//   //   </Marker>
//   // ))}
//   </ReactMapGL>

const mapDispatchToProps = dispatch => {
  return {
    fetchingDisasters: () => {dispatch(fetchingDisasters())},
    fetchingLocations: () => {dispatch(fetchingLocations())}
  }
}

export default connect(mapDispatchToProps)(MapContainer);
