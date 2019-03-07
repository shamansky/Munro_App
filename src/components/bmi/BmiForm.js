import React, { Component } from 'react';

class BmiForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      weight: 0,
      height: 0
    }
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleApplicationSubmit = this.handleApplicationSubmit.bind(this);
  }

  handleWeightChange(event){
    this.setState({weight: event.target.value});
  }

  handleHeightChange(event){
    this.setState({height: event.target.value});
  }

  handleApplicationSubmit(event){
    event.preventDefault();
    const weight = this.state.weight;
    const height = this.state.height;

    if(!weight || !height){
      return
    }
    this.props.onFormSubmit({weight: weight, height: height})
    this.setState({weight:0, height:0})
  }

  render(){
    return(
      <div>
      <form className="bmi-form" onSubmit={this.handleApplicationSubmit}>

      <p>Weight(kg): <input type="number" placeholder = "Weight"
      value={this.state.weight}
      onChange={this.handleWeightChange}/></p>

      <p>Height(m): <input type="number" placeholder="Height"
      value={this.state.height}
      onChange={this.handleHeightChange}/></p>

      <input type="submit" value="Calculate"/>

      </form>

      </div>
    )
  }
}

export default BmiForm;
