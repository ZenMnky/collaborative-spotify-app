// returns simple div with 'sorry! no results' 
// possibly add artist suggestions

import React from 'react';
import './css/noresults.css';

class NoResults extends React.Component {
  render() {
    return (
      <div className='no-results'>
          Sorry! No results found. Please try again.
      </div>
    );
  }
}

export default NoResults;