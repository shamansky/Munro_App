import React, { Component } from 'react';
import logo from './daniel.jpg';


class Daniel extends Component {
  render (){
    const mouse = this.props.mouse;
    return (
      <img src = {logo} alt="logo" style = {{ position: 'absolute', left: mouse.x, top:mouse.y }} />
    )
  }
}

export default Daniel;
