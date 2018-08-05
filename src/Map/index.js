

import React, {Component} from 'react';

//import 4 things from the npm install 'google-maps-react'.
//need Info Wrapper b.w Marker and GoogleApiWrapper?
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';





export class MapContainer extends Component {
  render() {
    console.log(this.props, 'this is the mapContainer!')

//STYLING THE MAP.
    // const style = {
    //   width: '35%',
    //   height: '45%'
    // }


//Map through the quakes data.
    let quakeMarkers = this.props.quake.map( (quake, i) =>
(
      <Marker key = {i}
        title={quake.properties.place}
         name={quake.properties.place}
      Marker position={{
         lat: quake.geometry.coordinates[0],
         lng: quake.geometry.coordinates[1]
      }}
/> //ends Marker container
) //ends function parantheses
) //ends .map
      // console.log(typeof(lat),typeof(lng));





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
     }}>


        {quakeMarkers}

    </Map>
  </div>
    )
  }
}

export default GoogleApiWrapper({apiKey:  ('AIzaSyDQYlpwCR32i3kbv13Sk1cO6YreWSsXofA')

})(MapContainer)



// export default MapContainer;
