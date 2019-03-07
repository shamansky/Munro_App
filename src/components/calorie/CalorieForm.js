import React, { Component } from 'react';

class CalorieForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      bmi: 0
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleBmiChange = this.handleBmiChange.bind(this);
    this.handleApplicationSubmit = this.handleApplicationSubmit.bind(this);



  }




  handleNameChange(event){
    this.setState({name: event.target.value});
  }

  handleBmiChange(event){
    this.setState({bmi: event.target.value});
  }

  handleApplicationSubmit(event){
    event.preventDefault();
    const name = this.state.name.trim();
    const bmi = this.state.bmi;

    if(!name || !bmi){
      return
    }
    this.props.onFormSubmit({name: name, bmi: bmi})
    this.setState({name:'', bmi:0})
  }

  



  render(){

    const munros = this.props.munros.map((munro, index) => {
    return <option key={index} value={index}>{munro.name}</option>
    })

    return(
      <div>
      <form className="calorie-form" onSubmit={this.handleApplicationSubmit}>
      <p>Name: <input type="text" placeholder="Name"
      value={this.state.name}
      onChange={this.handleNameChange}/></p>

      <p>BMI: <input type="number" placeholder = "BMI"
      value={this.state.bmi}
      onChange={this.handleBmiChange}/></p>

      <p>
      <select>
      <option selected disabled hidden>Select a Munro
      </option>
      {munros}
      </select>
      </p>

      <input type="submit" value="Calculate"/>

      </form>

      </div>
    )
  }
}

export default CalorieForm;
