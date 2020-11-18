// returns div with the artists top tracks (top 5?) using results cards

import React from 'react';
import AppContext from '../AppContext';
import ResultCard from './ResultCard';


class TopTracks extends React.Component {
    static contextType = AppContext;

    render() {
   // let tracks = loop through and create more resultcards
        return (
            <div className='details-slice'>
                <h3>TOP TRACKS</h3>
                <ResultCard />
                <ResultCard />
                <ResultCard />
                <ResultCard />
                <ResultCard />
            </div>
        )
    }
}

export default TopTracks;