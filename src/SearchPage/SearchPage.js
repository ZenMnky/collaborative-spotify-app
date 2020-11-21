// dependencies
import React from 'react';
import {Consumer, AppContext} from '../Context/AppContext';
// styles
import './css/searchpage.css';
// components
import SearchForm from './SearchForm';
import ArtistList from '../ArtistCardandList/ArtistList';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class SearchPage extends React.Component {
  static contextType = AppContext;

  render() {
    return (
      <Consumer>
        { () => {
          return(
            <div className='search-page'>
              <SearchForm />
              
              <ErrorBoundary>
                 <ArtistList />
              </ErrorBoundary>
          </div>      
          )
        }}
      </Consumer>
    );
  }
}

export default SearchPage;