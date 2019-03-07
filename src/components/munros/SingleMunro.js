import React from 'react';
import MunroItem from './MunroItem';

const SingleMunro = (props) => {
  if(!props.munro){
    return null;
  }
const renderMunros = props.munro.map((munro, i) => {
  if(props.id == i){
    return (
      <div key={0} className="component-single-munro">


      <h2 key={1}> <u>Name</u> : {munro.name}</h2>
      <h2 key={2}> <u>Region:</u> {munro.region}</h2>
      <h2 key={3}> <u>Height:</u> {munro.height}m</h2>
      <h2 key={4}> <u>Name meaning:</u> {munro.meaning}</h2>
      <img key={i}  className="munro-images" alt="" src={require(`../../images/munro-list/${munro.id}.jpg`)} />
      </div>
    )
  }
  else {
    return null;
  }
})

return (
  <div className="munro-container">
  {renderMunros}

  </div>
)
  }

  export default SingleMunro;


// for each munro i want to return a property of that munro where index = munro.id
