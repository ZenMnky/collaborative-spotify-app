import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BASE64 from '../config.js';

/*******************************************************************
 * API
 * API Docs: 
 * SEARCH FOR ITEM: https://developer.spotify.com/documentation/web-api/reference/search/search/
 * GET ARTIST : https://developer.spotify.com/console/artists/
 *******************************************************************/
const API_BASE = 'https://api.spotify.com/v1';
const API_TOKEN_URL = 'https://accounts.spotify.com/api/token';

/*=====  End of API  ======*/

export const AppContext = React.createContext();

export class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      access_token: '',
      error: null,
      artistOptions: null,
      selectedArtistCardData: null, //props for the artist card on the results page
      artistAlbums: null,
      artistTopTracks: null,
      artistRelatedArtists: null
    }
  }

  
  /*=============================================
    STEP 1
    - obtain authorization from spotify
    - receive object, which includes our token
    - store token in state
      - Note: token expires after 3600 seconds
  =============================================*/

  handleGetAuthToken = () => {
    return fetch(API_TOKEN_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': `Basic ${BASE64}`
      },
      body: 'grant_type=client_credentials'
    })
      .then(res => {
        //if not okay, throw error
        if (!res.ok) {
          throw new Error(res.status)
        }
        //other wise, return parsed response
        return res.json();
      })
      //update state
      .then(tokenResults => {
        this.setState({
          access_token: tokenResults.access_token
        });
        // setTimeout(handleGetAuthToken(), 3600);
      })
      //catch errors
      .catch(error => this.setState({ error }))

  }

  /*=============================================
    STEP 2
    Fetch initial artist infomration, based on search term
  =============================================*/

  handleSearchArtist = (artistQuery) => {
    //Initial Call
    //using the search endpoint and a given query,
    // fetch data (array of objects) and store in local state (in artistResults)

    return fetch(API_BASE + `/search?q=${artistQuery}&type=artist`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.state.access_token}`
      }
    })
      .then(res => {
        //if not okay, throw error
        if (!res.ok) {
          throw new Error(res.status)
        }
        //other wise, return parsed response
        return res.json();
      })
      //update state
      .then(artistResults => {
        this.setState({
          artistOptions: artistResults.artists.items
        });
        
      })
      //catch errors
      .catch(error => this.setState({
        error
      })
      )
  }

  
  
  /*=============================================
  STEP 3
  - When an artist is selected from the card options,
    grab the artist ID
  - Make a fetch for each of the remaining data:
    - top tracks
    - related artists
    - albums
  =============================================*/
  
  // Fetch 5 albums, limited to the US market
  handleFetchArtistAlbums = (id) => {

    return fetch(API_BASE + `/artists/${id}/albums?market=US&limit=5`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.state.access_token}`
      }
    }) 
      .then(res => {
        //if not okay, throw error
        if (!res.ok) {
          throw new Error(res.status)
        }
        //other wise, return parsed response
        return res.json();
      })
      //update state
      .then(albumResults => {
        this.setState({
          artistAlbums: albumResults.items
        });
      })
      //catch errors
      .catch(error => this.setState({ error }))
  }

  // Fetch Top Tracks, limited to US market
  handleFetchArtistTopTracks = (id) => {
    return fetch(API_BASE + `/artists/${id}/top-tracks?market=US`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.state.access_token}`
      }
    })
      .then(res => {
        //if not okay, throw error
        if (!res.ok) {
          throw new Error(res.status)
        }
        //other wise, return parsed response
        return res.json();
      })
      //update state
      .then(topTracksResults => {
        this.setState({
          artistTopTracks: topTracksResults.tracks
        });
      })
      //catch errors
      .catch(error => this.setState({ error }))
  }

  // Fetch related artists, limited to US market
  handleFetchRelatedArtists = (id) => {
    return fetch(API_BASE + `/artists/${id}/related-artists?market=US`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.state.access_token}`
      }
    })
      .then(res => {
        //if not okay, throw error
        if (!res.ok) {
          throw new Error(res.status)
        }
        //other wise, return parsed response
        return res.json();
      })
      //update state
      .then(relatedArtistResults => {
        this.setState({
          artistRelatedArtists: relatedArtistResults.artists
        });
        
      })
      //catch errors
      .catch(error => this.setState({ error }))
  }

  /*=====  End of Fetch Requests  ======*/
  
  
  // Handle state update
  updateSelectedArtistCardData = (artistCardStuff)  => {
    this.setState({
      selectedArtistCardData: artistCardStuff
    })

  }

render(){

  const contextValues = {
    ...this.state,
    handleSearchArtist: this.handleSearchArtist,
    handleGetAuthToken: this.handleGetAuthToken,
    handleFetchArtistAlbums: this.handleFetchArtistAlbums,
    handleFetchArtistTopTracks: this.handleFetchArtistTopTracks,
    handleFetchRelatedArtists: this.handleFetchRelatedArtists,
    updateSelectedArtistCardData: this.updateSelectedArtistCardData
  }

  return (
    <AppContext.Provider value={contextValues}>
      {this.props.children}
    </AppContext.Provider>
  );
}
}

Provider.propTypes = {
  children: PropTypes.element
}

export const { Consumer } = AppContext;