import React from 'react';

const CalorieItem = ({ calorie }) => {

  return(


    <div className = "added-calorie-form">

    <p>Your Name: {calorie.name}</p>
    <p>Your BMI: {calorie.bmi}</p>
    <h3>Hey {calorie.name}, while doing this Munro, you will burn {calorie.result} calories!</h3>
    </div>
  )
}

export default CalorieItem;
