// returns div with the artists recent albums (limit 5?) using results cards

import React from 'react';
import AppContext from '../AppContext';
import ResultCard from './ResultCard';


class Albums extends React.Component {
    static contextType = AppContext;

    render() {
   // let artists = loop through and create more resultcards
        return (
            <div className='details-slice'>
                <h3>ALBUMS</h3> 
                <ResultCard />
                <ResultCard />
                <ResultCard />
                <ResultCard />
                <ResultCard />
            </div>
        )
    }
}

export default Albums;