import React from 'react';

const BmiItem = ({ bmi }) => {

  const onDelete = () => {
      bmi.handleDelete()
    }

    

  return(
    <div className = "added-bmi-form">

    <p>Your Weight is {bmi.weight} kilograms</p>
    <p>Your Height is {bmi.height} m</p>
    <h3>Your BMI is {bmi.result}</h3>
    </div>
  )
}

export default BmiItem;
