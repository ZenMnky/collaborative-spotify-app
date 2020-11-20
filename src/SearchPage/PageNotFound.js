import React from 'react';
import SearchForm from './SearchForm';
import ArtistList from '../ArtistCardandList/ArtistList';

class PageNotFound extends React.Component {
  render() {
    return (
      <div className='notfound-page'>
          <p>Sorry! We couldn't find the page you were looking for.</p>
          <p>Wanna try again?</p>
          <SearchForm />
          <ArtistList />
      </div>
    );
  }
}

export default PageNotFound;