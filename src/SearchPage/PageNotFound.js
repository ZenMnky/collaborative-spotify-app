import React from 'react';
import SearchForm from './SearchForm';

class PageNotFound extends React.Component {
  render() {
    return (
      <div className='notfound-page'>
          <p>Sorry! We couldn't find the page you were looking for.</p>
          <p>Wanna try again?</p>
          <SearchForm />
      </div>
    );
  }
}

export default PageNotFound;