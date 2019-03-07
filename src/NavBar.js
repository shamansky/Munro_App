import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

const NavBar = (props) => {
  return (
    <header>
    <nav>
    <div>
      <ul>
        <li className="navLink">
          <Link className="navLink" to="/home">Home</Link>
        </li>
        <li className="navLink">
          <Link className="navLink" to="/map">Map</Link>
        </li>
        <li className="navLink">
          <Link className="navLink" to="/munros">Munros</Link>
        </li>
        <li className="navLink">
          <Link className="navLink" to="/CalorieCalculator">Calorie Calculator</Link>
        </li>
        <li className="navLink">
          <Link className="navLink" to="/sunrise" >Sunrise / Sunset</Link>
        </li>
        <li className="navLink">
          <Link className="navLink" to="/about" >About</Link>
        </li>
      </ul>
      </div>
      </nav>
    </header>
  )
}

export default NavBar;
