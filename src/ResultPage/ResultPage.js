import React from 'react';
import ArtistCard from '../ArtistCardandList/ArtistCard';
import TopTracks from './TopTracks';
import Albums from './Albums';
import RelatedArtists from './RelatedArtists';
import './resultpage.css';

class ResultsPage extends React.Component {
  render() {
    return (
      <div className='result-page'>
          <ArtistCard />
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