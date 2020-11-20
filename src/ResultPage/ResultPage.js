import React from 'react';
import ArtistCard from '../ArtistCardandList/ArtistCard';
import TopTracks from './TopTracks';
import Albums from './Albums';
import RelatedArtists from './RelatedArtists';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { AppContext } from '../Context/AppContext';
import { withRouter } from 'react-router-dom';
import PageNotFound from '../SearchPage/PageNotFound'

import './css/resultpage.css';

class ResultsPage extends React.Component {

  static contextType = AppContext;

  render() {
    
    if (this.context.selectedArtistCardData === null) {
      return <PageNotFound />
    }

    const { selectedArtistCardData } = this.context;
    const {name, genres, images} = selectedArtistCardData;

    return (
      <div className='result-page'>

        <ErrorBoundary>
          <ArtistCard
            name={name}
            genre={genres[0]}
            image={images.length > 0 ?
              images[0].url
              : 'http://truecontractors.ca/wp-content/uploads/2016/05/ds-placeholder-person.jpg'}
          />
        </ErrorBoundary>

        <div className='result-details'>
          <ErrorBoundary>
            <TopTracks />
          </ErrorBoundary>


          <ErrorBoundary>
            <Albums />
          </ErrorBoundary>

          <ErrorBoundary>
            <RelatedArtists />
          </ErrorBoundary>

        </div>

      </div>
    )};
  }




export default withRouter(ResultsPage);