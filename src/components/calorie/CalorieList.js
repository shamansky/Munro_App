import React, { Component } from 'react';
import CalorieItem from './CalorieItem';

class CalorieList extends Component {

  render(){
    const calorieNodes = this.props.applications.map((application) => {
      return (

        <CalorieItem key={application.id} calorie={application}></CalorieItem>
      )
    })

    return(

      <div className="calorie-list">
        {calorieNodes}
      </div>
    )
  }
}

export default CalorieList;
