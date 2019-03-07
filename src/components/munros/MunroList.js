import React, { Component } from 'react';
import MunroItem from './MunroItem';
import RegionView from './RegionView';

class MunroList extends Component {

  constructor(props){
    super(props);
    this.state = {
      region: [],
      height: [],
      alphabetical: []
    }
  }

  componentDidMount(){
    console.log(this.props.uniqueRegionsList);
  }

render(){

    // if (this.props.munros == null) {
    //   return <p>Loading...</p>
    // }
    //
    // const regions = this.props.munros.map((munro, index) => {
    //   return munro.region
    // })
    //
    // console.log('individualMunroObjects', individualMunroObjects);
    //
    // const uniqueRegions = (munro, index, array) => {
    //   return regions.filter((munro, index, array) => {
    //     return array.indexOf(munro) === index;
    //   })
    // }
    //
    // const uniqueRegionsList = uniqueRegions().map((region, index) => {
    //   return <option key={index} value={region}>{region}</option>
    // })
    //
    //
    // const handleSelectRegion = (event) => {
    //   console.log(event.target.value);
    //   this.setState({region: event.target.value})
    // }
    //
    // const renderAllMunrosByRegion = this.props.munros.map((munro, index) => {
    //   if(munro.region == this.state.region){
    //     return (
    //         <MunroItem
    //         key={index}
    //         munro={munro}
    //         />
    //       )
    //   }
    // })
    //
    // const renderAllMunros = this.props.munros.map((munro, index) => {
    //   return (
    //     <MunroItem
    //     key={index}
    //     munro={munro}
    //     />
    //   )
    // })
    //
    // const individualMunroObjects = () => {
    //     return this.props.munros.sort(function(a, b){
    //       return a.height - b.height
    //     })
    // }
    //
    // console.log('individualMunroObjects', individualMunroObjects());
    //

    // const munrosByName = this.props.munros.map((munro) => {
    //   return munro.name
    // })
    //
    // const sortAlphabetically = () => {
    //   const sorted = munrosByName.sort()
    //   return sorted
    // }
    //
    // console.log('sortAlphabetically', sortAlphabetically());

    // const renderAllMunrosAlphabetically = this.props.munros.map((munro, index) => {
    //   if(munro.region == this.state.region){
    //     return (
    //         <MunroItem
    //         key={index}
    //         munro={munro}
    //         />
    //       )
    //   }
    // })


    // console.log("regions state", this.state.region);


  return (

    <div>
    <form className="form">
    <select onChange={this.props.handleSelectRegion}>
    <option value="Filter By Region...">Filter By Region...</option>
    {this.props.uniqueRegionsList}
    </select>
    </form>
    <div className="button">
    <button onClick={this.props.handleAllMunrosByHeight}>Order By Height...</button>
    </div>
    <div className="button">
    <button onClick={this.props.handleAllMunrosAlphabetically}>Order Alphabetically...</button>
    </div>
    <div className="button">
    <button onClick={this.props.handleAllMunros}>All Munros...</button>
    </div>
    {this.props.renderAllMunrosByRegion}
    {this.props.renderAllMunrosByHeight}
    </div>
    )
  }
}

export default MunroList;


// {renderAllMunros}

// {this.props.munros.map((munro, index) => {
//   return (
//     <MunroItem
//     key={index}
//     munro={munro}
//     />
//   )
// })}
