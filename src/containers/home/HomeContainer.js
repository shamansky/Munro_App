import React, { Component } from 'react';

import image from './mountain.jpg';

class HomeContainer extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
      <img src={image} alt="Cairngorms" height="100%" width="100%"/>
      </div>
    )
  }
}

export default HomeContainer;
