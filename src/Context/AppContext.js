import React, {Component} from 'react';
import cuid from 'cuid';
import PropTypes from 'prop-types';

export const AppContext = React.createContext();

/**
 * API
 * API Docs: 
 * SEARCH FOR ITEM: https://developer.spotify.com/documentation/web-api/reference/search/search/
 * GET ARTIST : https://developer.spotify.com/console/artists/
 */

const API_BASE = 'https://api.spotify.com/v1';
let artistQuery = 'cake';

// fetch for search = {API_BASE}/search?q=bob&type=artist&offset=20&limit=2
//fetches for artist = {API_BASE}/artists/{id}
// 	{API_BASE}/artists/{id}/related-artists
// 	{API_BASE}/artists/{id}/top-tracks
// 	{API_BASE}/artists/{id}/albums

export class Provider extends Component {
    constructor(props){
        super(props);
        this.state={
          artistResults: [], //array of objects
          error: null,
          artistOptions: null
        }
      }

      //🚧 CONSTRUCTION ZONE 🚧

      componentDidMount = () =>{
        console.log(`component did indeed, mount`)
        this.handleSearchArtist();
      }

      handleSearchArtist = () => {
        //Initial Call
      //using the search endpoint and a given query,
      // fetch data (array of objects) and store in local state (in artistResults)
      
        fetch(API_BASE + `/search?q=${artistQuery}&type=artist&offset=20&limit=2`, {
          method: 'GET',
          headers: {
            'content-type': 'application/json'
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
        .then(artistResults => this.setState({ artistResults }))
        //catch errors
        .catch(error => this.setState({ error }))
        
        //When an artist is slected from the card options
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
        //     handleDeleteNote: this.handleDeleteNote,
        //     deleteNoteRequest: this.deleteNoteRequest,
        //     addFolder: this.addFolder,
        //     addFolderRequest: this.addFolderRequest,
        //     addNoteRequest: this.addNoteRequest,
        //     addNote: this.addNote,
        //     testContext: () => {console.log('context test!')}
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



