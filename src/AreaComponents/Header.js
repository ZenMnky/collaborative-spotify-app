import React from 'react';
import './css/header.css';
import {Link} from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to={'/'}> 
          <h1>ARTIST FIND</h1>
        </Link>
        
      </header>
    );
  }
}

export default Header;