import React, { Component } from 'react';
import SingleMunro from '../../components/munros/SingleMunro';

class SingleMunroContainer extends Component{
constructor(props){
  super(props)
}


  render(){



    console.log('georgeeee', this.props.munros);
    return (
      <div>
      <SingleMunro munro={this.props.munros} id = {this.props.id} />
      </div>

    )
  }

}

export default SingleMunroContainer;
