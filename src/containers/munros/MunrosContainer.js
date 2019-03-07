import React, { Component } from 'react';
import MunroList from '../../components/munros/MunroList';
import MunroItem from '../../components/munros/MunroItem';

class MunrosContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      munros: props.munros,
      region: [],
      height: [],
      alphabetical: [],
      filtered: false
    }
  }


  render(){

    if (this.props.munros == null) {
      return <p>Loading...</p>
    }

    const regions = this.props.munros.map((munro, index) => {
      return munro.region
    })

    const uniqueRegions = (munro, index, array) => {
      return regions.filter((munro, index, array) => {
        return array.indexOf(munro) === index;
      })
    }

    const uniqueRegionsList = uniqueRegions().map((region, index) => {
      return <option key={index} value={region}>{region}</option>
    })

    const handleSelectRegion = (event) => {
      console.log(event.target.value);
      this.setState({region: event.target.value})
    }

    const renderAllMunrosByRegion = this.props.munros.map((munro, index) => {
      if(munro.region == this.state.region){
        return (
            <MunroItem
            key={index}
            munro={munro}
            />
          )
      }
    })

    // const munrosSortedByHeight = () => {
    //     return this.props.munros.sort(function(a, b){
    //       return a.height - b.height
    //     })
    // }

    const munrosSortedByHeight = () => {
        const heightMunros =  this.props.munros.sort(function(a, b){
          return a.height - b.height
        })

    }

    const handleAllMunrosByHeight = (event) => {
      alert('selected')
    }

    const renderAllMunrosByHeight = this.props.munros.map((munro, index) => {
      if(munro.height == this.state.height){
        return (
          <MunroItem
          key={index}
          munro={munro}
          />
        )
      }
    })

    console.log('height state', this.state.height);

    console.log('munrosSortedByHeight', munrosSortedByHeight());

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

    const handleAllMunrosAlphabetically = (event) => {
      alert('selected')
    }

    const handleAllMunros = (event) => {
      alert('selected')
      console.log(event);
    }

    const renderAllMunros = this.props.munros.map((munro, index) => {
      return (
        <MunroItem
        key={index}
        munro={munro}
        />
      )
    })

    console.log("regions state", this.state.region);
    console.log('test', this.state.munros);
    console.log('container selected regionnnn', this.props.selectedRegion);

    return (
      <div>
      <MunroList
      munros={this.state.munros}
      selectedRegion={this.props.selectedRegion}
      handleSelectRegion={this.props.handleSelectRegion}
      handleSelectRegion={handleSelectRegion}
      renderAllMunros={renderAllMunros}
      renderAllMunrosByRegion={renderAllMunrosByRegion}
      uniqueRegionsList={uniqueRegionsList}
      renderAllMunros={renderAllMunros}
      munrosSortedByHeight={munrosSortedByHeight}
      renderAllMunrosByHeight={renderAllMunrosByHeight}
      handleAllMunrosByHeight={handleAllMunrosByHeight}
      handleAllMunrosAlphabetically={handleAllMunrosAlphabetically}
      handleAllMunros={handleAllMunros}
      />
      </div>
    )
  }

}

export default MunrosContainer;
