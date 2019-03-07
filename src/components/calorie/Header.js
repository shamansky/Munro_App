import React, {Component} from 'react';

class Header extends Component {
  render(){
    return (
    <h1 className='header-calorie'>{this.props.title}</h1>
  )
  }
}

export default Header;
