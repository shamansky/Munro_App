import React, { Component } from 'react';
import {Link} from 'react-router-dom';


import { Map, GoogleApiWrapper, InfoWindow, Marker, MarkerClusterer, GoogleMap, Google } from 'google-maps-react'

const mapStyles = {
  width: '100%',
  height: '100%'
}

export class MapContainer extends Component {


  constructor(props){
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    this.renderMarkers = this.renderMarkers.bind(this);
  }

  munroMarkers = this.props.munros.map((munro, i) => {
    return (
    <Marker key={i} lat={munro.latlng_lat} lng={munro.latlng_lng} />

    )
  })

  renderMarkers() {
  return this.props.munros.map((munro, i) => {
    return <Marker
      key={ i }
      onClick = { this.onMarkerClick }
      name = { munro.name }
      position = {{lat: munro.latlng_lat, lng: munro.latlng_lng}}
      id = { munro.id }
      // lat = { JSON.parse(munro.latlng_lat) }
      // lng = { JSON.parse(munro.latlng_lng) }
     />
  })
  }

  munroName(){
    return this.props.munros.map((munro, i) => {
      return (
        munro.name
      )
    })
  }

  munroLatitude() {
    return this.props.munros.map((munro, i) => {
      return (
        munro.latlng_lat
      )
    })
  }

  munroLongitude(id){
    return this.props.munros.map((munro, i) => {
      return (
        munro.latlng_lng
      )
    })
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render(){

console.log('all the munrossss', this.props.munros);

    console.log('the ID', this.props.munros[0].id);

    console.log('latlng', this.props.munros[0].latlng_lat, this.props.munros[0].latlng_lng);

    console.log('cluster', this.munroMarkers);

    console.log('cluster positions', this.munroMarkers[0].props);

    console.log('render markers', this.renderMarkers());

    console.log('all munro names', this.munroName());


    console.log('selected place', this.state.selectedPlace.name);

    return(

    <Map
    google={this.props.google}
    zoom={7.5}
    style={mapStyles}
    initialCenter={{
      lat: this.props.munros[270].latlng_lat,
      lng: this.props.munros[270].latlng_lng
    }}
    >
    { this.renderMarkers() }


    <InfoWindow
    marker={this.state.activeMarker}
    visible={this.state.showingInfoWindow}
    onClose={this.onClose}
    >
    <div>
    <h3>{this.state.selectedPlace.name}</h3>
    </div>
    <a href={'/munros/' + this.state.selectedPlace.id}>{this.state.selectedPlace.name}</a>


    </InfoWindow>
    </Map>
  );
  }
  }

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAwXdbCpc7uuyVCPS11OXMQpDocHpEc2dg'
})(MapContainer)
