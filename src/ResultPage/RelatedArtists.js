// returns div with the related artists (limit 5?) using results cards

import React from 'react';
import {AppContext} from '../Context/AppContext';
import ResultCard from './ResultCard';


class RelatedArtists extends React.Component {
    static contextType = AppContext;

    render() {
   // let artists = loop through and create more resultcards
        return (
            <div className='details-slice'>
                <h3>RELATED</h3> 
                <ResultCard />
                <ResultCard />
                <ResultCard />
                <ResultCard />
                <ResultCard />
            </div>
        )
    }
}

export default RelatedArtists;