import React, { Component } from 'react';
import Quakes from './Quakes'; //this can be a component OR a function.
import Map from './Map';

class App extends Component {
constructor() {
  super();

  this.state = {
    quakes : [],
  }
}

//==========MAKE AN ASYNC FUNCTION THAT FETCHES API.========

//getQuakes is a function with the .json method attached to part of it. Need to call the function.
  getQuakes = async() => { //async b.c all that data needs to load 1st.
    try{ //try always needs a catch(err) b.c it may fail. so return err; return will break it out of continuously looking.
      //this const could be called quake also b.c it is scoped. you need to use a method to get this data into your empty array.
      const quakeData = await fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson")

      const getQuakesJson = await quakeData.json(); //await is saying load it all first then display it. without await it would just render before it is tranlsated to json code. json makes the data into an object for our OOP js needs.
      console.log(getQuakesJson); //checks the data.

      return getQuakesJson; //get the data here.

    } catch(err) {
      return err;
    }
  }

  //Call the function.
  componentDidMount(){
    // this.getQuakes() calls the getQuakes function. this.getQuakes returns the big object of data. You need this b.c getQuakes is a method in the class you are scoped inside of. so you need to say this to refer to the class first, then getQuakes() b.c it is a method. NEED this b.c

    this.getQuakes().then((quakeData) => {

      //quakeData is a parameter. could be any name. quakeData is now the state of quakes. So the 'then' part is setting the state to be equal to the data we got. now we can get the data dynamically so if it is updated we can render that update on our page. ex: twitter feed on the initial load.
      
      this.setState({quakes:quakeData.features}) //pushes state into something new. you are changing quakes, which means you need something to change it into. key:value pair which means quakes has the value of quakeData. it's like prev state is now set to new state (quakeData)
    })

  }



//Render on the Page.
  render() {
    console.log(this.state);
    return (
      <div className="app">
        <div className="mapContainer">
          < Map />
        </div>
        <div className="quakeContainer">

          <h1>Earthquakes from the past week: </h1>
          < Quakes quakes={this.state.quakes} />
{/* we are passing the whole quakes data (this.state.quakes) to the Quakes component's. We are giving it a property of quakes. */}
        </div>
      </div>
    );
  }
}

export default App;
