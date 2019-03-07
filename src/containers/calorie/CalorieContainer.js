import React, {Component} from 'react';
import Header from '../../components/calorie/Header';
import CalorieForm from '../../components/calorie/CalorieForm';
import CalorieList from '../../components/calorie/CalorieList';
import BmiContainer from './BmiContainer';

class CalorieContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      applications: []
    }
    this.handleApplicationSubmit = this.handleApplicationSubmit.bind(this);
    this.calculateBmi = this.calculateBmi.bind(this);
  }

calculateBmi() {

    switch(this.state.bmi) {
      case (this.state.bmi<18):
      return 111
      case (this.state.bmi >18):
      console.log('');
      return (<p>122</p>)
      default:
      return null;
    }

  }

  handleApplicationSubmit(newApplication){
    console.log(newApplication);
    newApplication.id = Date.now();
    newApplication.result = parseFloat(newApplication.bmi) + 2500
    console.log(this.state);
    const updatedApplication = [newApplication];
    this.setState({applications: updatedApplication});
  }

   render(){

     return(
       <div className ='main-calorie-box'>
       <Header title = 'Calorie Calculator'/>
       <CalorieForm onFormSubmit={this.handleApplicationSubmit} munros ={this.props.munros} calculateBmi = {this.calculateBmi}/>
       <CalorieList applications={this.state.applications} munros={this.props.munros} />
       </div>
     )
   }
}


export default CalorieContainer;


// render={() => {
//   return <CalorieContainer munros={this.state.munros} />}
