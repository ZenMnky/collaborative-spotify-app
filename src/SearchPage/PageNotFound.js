import React from 'react';
import SearchForm from './SearchForm';

class PageNotFound extends React.Component {
  render() {
    return (
      <div className='notfound-page'>
          Sorry! We couldn't find the page you were looking for.
          Wanna try again?
          <SearchForm />
      </div>
    );
  }
}

export default PageNotFound;