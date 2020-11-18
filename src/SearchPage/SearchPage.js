import React from 'react';
import './css/searchpage.css';
import SearchForm from './SearchForm';
import ArtistList from '../ArtistCardandList/ArtistList';

class SearchPage extends React.Component {
  render() {
    return (
      <div className='search-page'>
          <SearchForm />
          <ArtistList />
      </div>
    );
  }
}

export default SearchPage;