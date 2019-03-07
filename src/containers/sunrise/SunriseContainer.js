import React, { Component } from 'react';
import Sunrise from '../../components/sunrise/Sunrise';
import SunriseData from '../../components/sunrise/SunriseData'
import Request from '../../helpers/Request';

class SunriseContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: [],
      selectedPlace: null
    }
  }

  // write a function called handleSubmit
  // pass the function to Sunrise component as a prop
  // inside the handleSubmit function you request the Sunrise API and store the response in state
  // pass that sunrise data to component also so that it renders too
  // `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=${date}`
    componentDidMount(){
    const url = 'https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=2019-03-03';
    const request = new Request();
    request.get(url).then((data) => this.setState({data: data}))
    }

  render(){
    console.log('sunrise container data', this.state.data);
    return(
      <div>
      <Sunrise data={this.state.data} munros={this.props.munros} componentDidMount = {this.componentDidMount} />
      </div>
    )
  }

}

export default SunriseContainer;

// const munro = this.props.munros[index];

// onSubmit={props.handleSubmit()}

// const url = 'https://api.sunrise-sunset.org/json?lat=' + munro.latlng_lat + '&lng=' + munro.latlng_lng +'&date=today';
