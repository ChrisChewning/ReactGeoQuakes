import React, { Component } from 'react';

//functional component is stateless so doesn't need Component, Constructor, super() b.c it is is just showing (rendering) stuff on the page.


//Quakes refers to what?
const Quakes = (props) => {
  console.log(props, ' this is props');


// .map is our only functional part of this. It creates a new array of all our jsx list items. So for here you are creating the variable quakes and setting its value to

//props is eveything you send to it from its parent. 1st parameter is each item of the array its mapping over. 2nd is the index. the li key needs to refer to the index.

// from app.js quakes is where we are putting our API data.

// this.state = {
  //   quakes : [],
  // }

  const quakes = props.quakes.map((quake, i) => {
    return (
      <li key={i}> {quake.properties.title} </li>
    )
  })

  return (
    <div>
      <ul>{quakes}</ul>
    </div>
  )
}



export default Quakes; //default means no need for file name on import.
