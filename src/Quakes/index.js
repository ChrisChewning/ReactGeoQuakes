import React, { Component } from 'react';

const Quakes = (props) => {
  console.log(props, ' this is props');

//Map through the quakes data that came from App.js, 42. using props of quakes, from app.js. Then map over the initial empty array from app.js

  const quakesHTML = props.quakes.map((quake, i) => {
    return (
      <li key={i}> {quake.properties.title} </li>
    )
  })

  return (
    <div>
      <ul>{quakesHTML}</ul>
    </div>
  )
}

export default Quakes;
