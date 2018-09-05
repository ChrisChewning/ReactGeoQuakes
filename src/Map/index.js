import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';


 class MapContainer extends Component {
  render() {
    console.log(this.props, 'this is the mapContainer!')


    let quakeMarkers = this.props.quake.map( (quake, i) =>
(

      <Marker key = {i}
        title={quake.properties.place}
         name={quake.properties.place}
       position={{
         lat: quake.geometry.coordinates[1],
         lng: quake.geometry.coordinates[0]
      }}
/>
)
)


    return (
    <div className = "MapContainer">

      <Map className="mapDimensions" google={this.props.google} zoom={2}
      initialCenter={{
        lat: 37.78,
        lng: -122.44
    }}
     style={{
       width: '85%',
       height: '85%'
     }}


     onClick={this.onMapClicked}>

        {quakeMarkers}

    </Map>
  </div>
    )
  }
}

export default GoogleApiWrapper({apiKey:  ('AIzaSyDQYlpwCR32i3kbv13Sk1cO6YreWSsXofA')

})(MapContainer)
