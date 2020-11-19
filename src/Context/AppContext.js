import React, {Component} from 'react';
// import cuid from 'cuid';
import PropTypes from 'prop-types';
import BASE64 from '../config.js'
import { dummyItems } from './dummyItems'; //artist options
import { dummyAlbums } from './dummyAlbums';
import { dummyTopTracks } from './dummyTopTracks';
import { dummyRelatedArtists } from './dummyRelatedArtists';

export const AppContext = React.createContext();

/**
 * API
 * API Docs: 
 * SEARCH FOR ITEM: https://developer.spotify.com/documentation/web-api/reference/search/search/
 * GET ARTIST : https://developer.spotify.com/console/artists/
 */

const API_BASE = 'https://api.spotify.com/v1';
const API_TOKEN_URL = 'https://accounts.spotify.com/api/token';
let artistQuery = 'cake';
const colterWallID = '3xYXYzm9H3RzyQgBrYwIcx';

// fetch for search = {API_BASE}/search?q=bob&type=artist&offset=20&limit=2
//fetches for artist = {API_BASE}/artists/{id}
// 	{API_BASE}/artists/{id}/related-artists
// 	{API_BASE}/artists/{id}/top-tracks?m
// 	{API_BASE}/artists/{id}/albums

// "Authorization: Bearer"


export class Provider extends Component {
    constructor(props){
        super(props);
        this.state={
          access_token: 'BQC7dPxqihhlma9dbD19d2bFIVaf_zaTy21Xdjntdj2gkntotKm_s3NW-1tC7HcygUIeZ1ckPHmnHmkqums',
          artistResults: [], //array of objects
          error: null,
          artistOptions: dummyItems,
          artistAlbums: dummyAlbums.items,
          artistTopTracks: dummyTopTracks,
          artistRelatedArtists: dummyRelatedArtists
        }
      }

      //🚧 CONSTRUCTION ZONE 🚧

      //STEP 1
      //obtain authorization from spotify
      //receive object, which includes our token
      //store token in state
      
      //token expires in 3600 seconds
      //set timer to make a call for a new auth token
      //replace with new token
      
      handleGetAuthToken = () => {
        fetch(API_TOKEN_URL, {
          method: 'POST',
          headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Authorization': `Basic ${BASE64}`
            },
            body: 'grant_type=client_credentials'
        })
        .then(res => {
          //if not okay, throw error
          if(!res.ok){
            throw new Error(res.status) 
          }
          //other wise, return parsed response
          return res.json();
        })
        //update state
        .then(tokenResults => {
          console.log(tokenResults)
            this.setState({ 
                access_token: tokenResults.access_token
            });
            // setTimeout(handleGetAuthToken(), 3600);
        })
        //catch errors
        .catch(error => this.setState({ error }))

      }

      //STEP 2
      //Party : make calls all day (well, for 1 hour, untill we need to get a new token)


      handleSearchArtist = () => {
        //Initial Call
      //using the search endpoint and a given query,
      // fetch data (array of objects) and store in local state (in artistResults)
      
        fetch(API_BASE + `/search?q=${artistQuery}&type=artist&offset=20&limit=2`, {
          method: 'GET',
          headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.state.access_token}`
          }
        })
        .then(res => {
          //if not okay, throw error
          if(!res.ok){
            throw new Error(res.status)
          }
          //other wise, return parsed response
          return res.json();
        })
        //update state
        .then(artistResults => {
          this.setState({ artistResults })
        })
        //catch errors
        .catch(error => this.setState({ error }))
        
        //When an artist is selected from the card options
        //Make a fetch for the remaining data, based on the artist URI
            //top tracks
            //related artists
            //albums
    
      
      //🚧 CONSTRUCTION ZONE 🚧
      }
      
       /*=============================================
      =            State Modifiers            =
      =============================================*/
      // addFolder = (folder) => {
      //   this.setState({
      //     folders: [...this.state.folders, folder]
      //   })
      // }

      // addNote = (note) => {
      //   this.setState({
      //     notes: [...this.state.notes, note]          
      //   })
      // }

      
      /*=====  End of State Modifiers  ======*/

    componentDidMount = () => {
        
    }
          

    render(){
        const contextValues = {
            ...this.state,
            handleSearchArtist: this.handleSearchArtist,
            handleGetAuthToken: this.handleGetAuthToken,
        //     deleteNoteRequest: this.deleteNoteRequest,
        //     addFolder: this.addFolder,
        //     addFolderRequest: this.addFolderRequest,
        //     addNoteRequest: this.addNoteRequest,
        //     addNote: this.addNote,
            testContext: () => {console.log('context test!')}
        }

        return(
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



