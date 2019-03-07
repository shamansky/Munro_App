import React from 'react';
import SunriseData from './SunriseData';

const Sunrise = (props) => {

    console.log('munro data', props.munros);

    const munros = props.munros.map((munro, index) => {
    return <option key={index} value={index}>{munro.name}</option>
    })

    if(!props.munros){
      return null;
    }

    const handleSubmit = (event) => {
    props.componentDidMount();
    alert('option selected', props.event.target.value.name)
    }

    return(
      <div className="sunrise">
      <form onSubmit={handleSubmit}>
      <h1>Sunset / Sunrise</h1>
      <select>
      <option selected disabled hidden>Select a Munro
      </option>
      {munros}
      </select>
      <button type="submit">Submit</button>
      </form>

      </div>
    )
}

export default Sunrise

// <input type="date" name="date"/>

// add onSubmit = {handleSubmit} function to the form

// onSubmit={props.handleSubmit()}

// props.componentDidMount(event.target.value)

// <SunriseData />
