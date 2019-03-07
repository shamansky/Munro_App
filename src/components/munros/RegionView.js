import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const RegionView = (props) => {

  if(!props.munro){
    return null;
  }

    return(
      <div className = "component">
      <li>
      <Link to={'/munros/' + props.munro.id}>{props.munro.name}</Link>
      </li>
      </div>
    )
  }

  export default RegionView;
