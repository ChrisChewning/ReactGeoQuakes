import React, { Component } from 'react';

class Quakes extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    console.log(this.props.quakes.features);
    return(
      <h1>hi</h1>
    )
  }

}



export default Quakes; //default means no need for file name on import.
