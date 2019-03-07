import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const MunroItem = (props) => {

  if(!props.munro){
    return null;
  }

    return(
      <div className = "component">
      <li className="munrolist">
      <Link className="link" to={'/munros/' + props.munro.id}>{props.munro.name}</Link>
      </li>
      </div>
    )
  }

  export default MunroItem;
