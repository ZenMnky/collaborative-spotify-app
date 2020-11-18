// returns form and handles our initial FETCH to get artist lists

import React from 'react';
import './css/searchform.css';
import ValidationError from './ValidationError';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            touched: false
        }
    }

updateSearchTerm = (val) => {
    this.setState({
        searchTerm: val,
        touched: true
    })
}

validateSearch = () => {
    const {searchTerm} = this.state
    if(searchTerm.length === 0) {
        return 'Please input artist name'
    }
}

  render() {
    const errorMessage = this.validateSearch();

    return (
        //call search request on submit
      <form onSubmit={() => alert(this.state.searchTerm)}>
          <fieldset>

              <legend>Artist Name</legend>

          <ValidationError message={errorMessage}
          touched={this.state.touched}/>

          <input 
          type='text' 
          name='search-term' 
          id='search-term'
          placeholder='Cake'
          value={this.state.searchTerm}
          onChange={(e) => this.updateSearchTerm(e.target.value)}
          >
          </input>

          <button type='submit'
          disabled={this.validateSearch()}
          >Search</button>

          </fieldset>
      </form>
    );
  }
}

export default SearchForm;