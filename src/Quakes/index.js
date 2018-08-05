import React, { Component } from 'react';




//functional, stateless component so just a function.
//function Quakes is housing the variable quakes.
//Quakes is the same name as what is inside default Quakes.


//=============QUESTION 1: Why is it titled Quakes?===================

const Quakes = (props) => {
  console.log(props, ' this is props');


//Map through the quakes data that came from App.js, 42
  const quakes = props.quakes.map((quake, i) => { //map over qake
    return (
      <li key={i}> {quake.properties.title} </li>
    )
  })

//CONST QUAKES = PROPS.QUAKES.MAP EXPLANATION...

  //props is eveything you send to quakes from its parent.
  //.quakes is what was the empty array but now has all the data.
  //.map is basically a way to loop through data. it is our only functional part of this file. it creates a new array of all our jsx list items. It has 2 parameters.


  //you want to return the {quake.properties.title}, which refers to the title you found in the Google API.


  // from app.js quakes is where we are putting our API data.

  // this.state = {
    //   quakes : [],
    // }



//return the data you've caught and mapped over. this is the initial empty array in your app.js file. to return it you have to put it in {}
  return (
    <div>
      <ul>{quakes}</ul>
    </div>
  )
}



export default Quakes; //default means no need for file name on import.
