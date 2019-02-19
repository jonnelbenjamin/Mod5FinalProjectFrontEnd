import React, { Component, PropTypes } from 'react'
import MapboxGl from 'mapbox-gl/dist/mapbox-gl.js'

class Map extends Component {


  componentDidMount() {
    MapboxGl.accessToken = 'pk.eyJ1IjoiYWxscnlkZXIiLCJhIjoidWs5cUFfRSJ9.t8kxvO3nIhCaAl07-4lkNw'

    const map = new MapboxGl.Map({
      container: 'Map',
      style: 'mapbox://styles/mapbox/light-v8',
      bearing: 0,
      pitch: 40,
      intensity: 0.5,
      center: [15, 10],
      zoom: 1.3
    })
}


  render() {

    return (
      <div id='Map'>
      
      </div>
    )
  }
}


export default Map;
