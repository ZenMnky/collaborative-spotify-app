// returns LIST of artist cards, which are clickable. clicking triggers subsequent fetch calls (artist, albums, shows) using id

import React from 'react';
import AppContext from '../AppContext';

class ArtistList extends React.Component {
    static contextType = AppContext;

    render() {
        const list = 
        this.context.artistOptions 
        ?
        <div className='artist-list'>
            for each loop with artist cards
            </div>
        : ''
        return (
            list
        )
    }
}

export default ArtistList;