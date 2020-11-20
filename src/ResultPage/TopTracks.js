// returns div with the artists top tracks (top 5?) using results cards

import React from 'react';
import { AppContext } from '../Context/AppContext';
import ResultCard from './ResultCard';


class TopTracks extends React.Component {
    static contextType = AppContext;

    render() {
        let results = this.context.artistTopTracks ?
        this.context.artistTopTracks.map((result, idx) => {
            if (idx < 5) {
                return (
                    <a href={result.external_urls.spotify}
                    target='_blank'
                    rel="noreferrer">
                        <ResultCard
                            key={idx}
                            name={result.name}
                            image={result.album.images.length > 0 ?
                                result.album.images[0].url
                                : 'http://truecontractors.ca/wp-content/uploads/2016/05/ds-placeholder-person.jpg'} />
                    </a>
                )
            }
        }) : 'not found'
   
        return (
            <div className='details-slice'>
                <h3>TOP TRACKS</h3>
                {results}
            </div>
        )
    }
}

export default TopTracks;