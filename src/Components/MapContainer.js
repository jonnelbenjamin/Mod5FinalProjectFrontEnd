import React, { useState, useEffect } from 'react';
import { Segment} from 'semantic-ui-react'
import APIkey from '../mapboxAPIkey'
import InfoWindow from './InfoWindow'
import { connect } from 'react-redux'
import {fetchingDisasters, fetchingLocations} from '../Redux/actions'
import AreaInfo from './AreaInfo'
import Iframe from 'react-iframe'


import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as parkDate from "./data/skateboard-parks.json";

 function MapContainer() {

  // useEffect(() => {
  //   // this.props.fetchingDisasters()
  //   // this.props.fetchingLocations()
  // }, []);




  //
  // const [viewport, setViewport] = useState({
  //   latitude: 18.448347,
  //   longitude: -20.793440,
  //   width: "98.8vw",
  //   height: "82.5vh",
  //   zoom: 1.5
  // });
  // const [selectedPark, setSelectedPark] = useState(null);
  //
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

 // const onMarkerClick = (props, marker, e) => {
 //    this.setState({
 //      selectedPlace: props,
 //      activeMarker: marker,
 //      showingInfoWindow: true
 //    })
 //  }

  return (
    <div>
    <h1>The core leadership team of United Relief was birthed from
    a group of individuals who have spent many past seasons living
    and serving in different nations around the world. They gave their lives away to help
    those who have lost everything in the midst of the chaos of this world. Young and passionate
    friends became inspired visionaries to make a difference in the lives of those who can't make
    a difference for themselves. Although tremendous progress has been made in the continuing
    initiatives of United Relief, there is still much work to be done.
    </h1>
      // <ReactMapGL
      //   // {...viewport}
      //   // mapboxApiAccessToken={APIkey}
      //   // mapStyle="mapbox://styles/mapbox/satellite-v9"
      //   // onViewportChange={viewport => {
      //   //   setViewport(viewport);
      //   // }}
      // >
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
      //   //   {console.log('hit')}
      //   //   </Marker>
      //   // ))}
      //   </ReactMapGL>
    </div>
  );
}

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchingDisasters: () => {dispatch(fetchingDisasters())},
//     fetchingLocations: () => {dispatch(fetchingLocations())}
//   }
// }

// export default connect(mapDispatchToProps)(MapContainer);
export default MapContainer;
