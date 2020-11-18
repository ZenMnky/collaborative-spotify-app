import React from 'react';
import './css/searchpage.css';
import SearchForm from './SearchForm';
import ArtistList from '../ArtistCardandList/ArtistList';
import {Consumer, AppContext} from '../Context/AppContext';


class SearchPage extends React.Component {
  static contextType = AppContext;

  componentDidMount(){
    //Testing out connection to context.
    //Successfully linked
    // this.context.testContext();
    //testing out call to api
    //api call is made once, when page mounts: good.
    //next: configure access to api with credentials
      //make config.js file with log in creds
      //add ^ to .gitignore
      //test api again
    // this.context.handleSearchArtist();
  }
  render() {
    return (
      <Consumer>
        { () => {
          return(
            <div className='search-page'>
              <SearchForm />
              <ArtistList />
          </div>      
          )
        }}
      </Consumer>

      
    );
  }
}

export default SearchPage;