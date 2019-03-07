import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Request from './helpers/Request';
import MapContainer from './containers/map/MapContainer';
import MunrosContainer from './containers/munros/MunrosContainer';
import SingleMunroContainer from './containers/munros/SingleMunroContainer';
import SunriseContainer from './containers/sunrise/SunriseContainer';
import HomeContainer from './containers/home/HomeContainer';
import NavBar from './NavBar.js';
import AboutContainer from './containers/about/AboutContainer';
import Mouse from './containers/Mouse';
import CalorieContainer from './containers/calorie/CalorieContainer';
import BmiContainer from './containers/calorie/BmiContainer';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      munros: [],
      selectedPlace: {},
      selectedRegion: []
    }
    this.handleSelectRegion = this.handleSelectRegion.bind(this);
  }

  componentDidMount(){
  const url = 'https://munroapi.herokuapp.com/munros';
  const request = new Request();
  request.get(url)
  .then((data) => {
    data.forEach((munro, i) => {
    munro.id = i;
  })
   this.setState({munros: data})
 })
}

//create a region view
//write an if statement to say that if the selected region is the same as the the munro it renders the result

handleSelectRegion(event){
  console.log(event.target.value);
  this.setState({selectedRegion: event.target.value})
}



  render() {
    console.log('Selected Regionnnn', this.state.selectedRegion);
    if(this.state.munros.length === 0){
      return null;
    }
    return (
      <Router>
      <Fragment>
      <NavBar />
      <Switch>
      <Route exact path = '/home' component={HomeContainer} />
      <Route exact path = '/map' render={() => {
        return <MapContainer munros={this.state.munros}/>}
      } />

      <Route exact path = '/munros' render={() => {
        return <MunrosContainer munros={this.state.munros} handleSelectRegion={this.handleSelectRegion} selectedRegion={this.state.selectedRegion}/>}
      } />

      <Route exact path = '/munros/:id' render={(props, munros) => {
        const id = props.match.params.id;
        return <SingleMunroContainer id={id} munros = {this.state.munros} />}
      } />

      <Route exact path = '/sunrise' render={() =>  <SunriseContainer munros={this.state.munros} />}/>

      <Route exact path = '/CalorieCalculator' render={() => {
        return  (
          <div>
          <BmiContainer munros={this.state.munros} />
          <CalorieContainer munros={this.state.munros}/>
          </div>
        )}
      } />


      <Route exact path = '/' component = {Mouse} />

      <Route exact path = '/about' component = {Mouse} />

      </Switch>
      </Fragment>
      </Router>
    );
  }
}

export default App;




// api key: AIzaSyAwXdbCpc7uuyVCPS11OXMQpDocHpEc2dg

// this.state.munros(event.target.value)
