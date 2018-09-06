import React, { Component } from 'react';
import Quakes from './Quakes'; //this can be a component OR a function.
import MapContainer from './Map';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import Footer from './Footer';

//STEPS
//1. Fetch your API with an asynchronous function. await keyword says load THEN display. w/o it you just get json code.
//2. Convert it to json. OOP js needs it in this format.
//3. Load that data using componentDidMount. //note: quakeData is a parameter. Name doesn't matter. returns the big object of data.
//4. Set the state.
//5. Render


class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    quakes : [],
  }
}

  getQuakes = async() => {
    try{
      const quakeData = await fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson")

      const getQuakesJson = await quakeData.json();
      console.log(getQuakesJson);
      return getQuakesJson;

    } catch(err) {
      return err;
    }
  }

  componentDidMount(){
    this.getQuakes().then((quakeData) => {
      this.setState({quakes:quakeData.features})
    })
  }

  render() {
    console.log(this.state); //need data for map and the 'quakes from past wk.

    return (

      <div className="app row">
        <div>
        <Header />
      </div>
        <div className="mapContainer  col-sm-12 col-md-5">
          <MapContainer className='map' quake={this.state.quakes}/>
        </div>

        <div className="quakeContainer col-sm-12 col-md-5">
          <h1>USGS DATA: </h1>
          <Quakes quakes={this.state.quakes}/> {/* list of quakes; passing data to Quakes. */}

        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
