// returns div with the related artists (limit 5?) using results cards

import React from 'react';
import { AppContext } from '../Context/AppContext';
import ResultCard from './ResultCard';


class RelatedArtists extends React.Component {
    static contextType = AppContext;

    render() {
        let results = this.context.artistRelatedArtists.map((result, idx) => {
            if (idx < 5) {
                return (
                    <a href={result.external_urls.spotify}
                    target='_blank'
                    rel="noreferrer">
                        <ResultCard
                            name={result.name}
                            image={result.images.length > 0 ?
                                result.images[0].url
                                : 'http://truecontractors.ca/wp-content/uploads/2016/05/ds-placeholder-person.jpg'} />
                    </a>
                )
            }
        })

        return (
            <div className='details-slice'>
                <h3>RELATED</h3>
                {results}
            </div>
        )
    }
}

export default RelatedArtists;