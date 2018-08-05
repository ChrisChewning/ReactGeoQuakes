import React, {Component} from 'react';

//import 4 things from the npm install 'google-maps-react'.
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';


//next line: export class MapContainer (export on this line?)
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
/> //ends Marker container
) //ends function parantheses
) //ends .map


    return (
    <div className = "MapContainer">

      <Map className="mapDimensions" google={this.props.google} zoom={0}
      initialCenter={{
        lat: 37.78,
        lng: -122.44
    }}
     style={{
       width: '25%',
       height: '25%'
     }}


     onClick={this.onMapClicked}>


  {/* you are returning you Markers function here. */}
        {quakeMarkers}

    </Map>
  </div>
    )
  }
}

export default GoogleApiWrapper({apiKey:  ('AIzaSyDQYlpwCR32i3kbv13Sk1cO6YreWSsXofA')

})(MapContainer)
