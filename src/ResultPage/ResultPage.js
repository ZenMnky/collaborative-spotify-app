import React from 'react';
import ArtistCard from '../ArtistCardandList/ArtistCard';
import TopTracks from './TopTracks';
import Albums from './Albums';
import RelatedArtists from './RelatedArtists';
import './css/resultpage.css';
import {AppContext} from '../Context/AppContext';

class ResultsPage extends React.Component {

  static contextType = AppContext;

  render() {
    const {artistOptions} = this.context;
    const artist = artistOptions[2];

    return (
      <div className='result-page'>

          <ArtistCard 
          name={artist.name}
          genre={artist.genres[0]}
          image={artist.images.length > 0 ? 
              artist.images[0].url 
              : 'http://truecontractors.ca/wp-content/uploads/2016/05/ds-placeholder-person.jpg'}/>

          <div className='result-details'>
          <TopTracks />
          <Albums />
          <RelatedArtists />
          </div>
          
      </div>
    );
  }
}

export default ResultsPage;