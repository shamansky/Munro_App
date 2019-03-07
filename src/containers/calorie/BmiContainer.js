import React, {Component} from 'react';
import BmiForm from '../../components/bmi/BmiForm';
import BmiList from '../../components/bmi/BmiList';

class BmiContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      applications: []
    }
    this.handleApplicationSubmit = this.handleApplicationSubmit.bind(this);

  }

   handleApplicationSubmit(newApplication){
     newApplication.id = Date.now();
     newApplication.result = (parseFloat(newApplication.weight)/ ((parseFloat(newApplication.height)) * (parseFloat(newApplication.height)))).toFixed(0);
     const updatedApplication = [newApplication];
     this.setState({applications: updatedApplication});
   }




   render(){
     return(
       <div className ='main-bmi-box'>
       <h1>BMI Calculator</h1>
       <BmiForm onFormSubmit={this.handleApplicationSubmit} />
       <BmiList applications={this.state.applications} />

       </div>
     )
   }
}

export default BmiContainer;
