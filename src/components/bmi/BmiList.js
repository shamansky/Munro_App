import React, { Component } from 'react';
import BmiItem from './BmiItem';

class BmiList extends Component {

  render(){
    const bmiNodes = this.props.applications.map((application) => {
      return (
        <BmiItem key={application.id} bmi={application} ></BmiItem>
      )
    })

    return(
      <div className="bmi-list">
        {bmiNodes}
      </div>
    )
  }
}

export default BmiList;
