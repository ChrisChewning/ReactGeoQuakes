import React, {Component} from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//import 4 things from the npm install 'google-maps-react'. you only want to install certain things.

export class MapContainer extends Component {
  render() {
    console.log(this.props, 'this is the mapContainer!')
    const style = {
      width: '35%',
      height: '45%'
    }
    const quakes = this.props.quake.map((quake, i) => {
      const lat = quake.geometry.coordinates[0];
      const lng = quake.geometry.coordinates[1];
      console.log(typeof(lat),typeof(lng));
      return <Marker position={{
          lat: {
            lat
          },
          lng: {
            lng
          }
        }} key={i}/>

    })
    return (<Map className="mapDimensions" google={this.props.google} zoom={5} style={style}>

        {quakes}

    </Map>);
  }
}

export default GoogleApiWrapper({apiKey: 'AIzaSyDQYlpwCR32i3kbv13Sk1cO6YreWSsXofA'})(MapContainer)
