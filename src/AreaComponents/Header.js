import React from 'react';
import './css/header.css';
import {Link} from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
class Header extends React.Component {
  static contextType = AppContext;

  render() {
    return (
      <header>
        <Link to={'/'} onClick={() => this.context.clearArtistState()}> 
          <h1>ARTIST FIND</h1>
        </Link>
        
      </header>
    );
  }
}

export default Header;