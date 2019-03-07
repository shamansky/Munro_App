import React, { Component } from 'react';
import Daniel from '../components/Daniel.js';


class Mouse extends Component {
  constructor(props){
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = {x:0, y:0};
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render(){
    return (
      <div style = {{ height: '100%' }} onMouseMove={this.handleMouseMove}>
      <h1> <u>The Scrum Master Game!!</u> </h1>
      <h2> Move <u>Daniel</u> around!</h2>
      <h3>The current mouse position is ({this.state.x}, {this.state.y})</h3>
      <Daniel mouse = {this.state} />
      </div>
    )
  }
}

export default Mouse;
