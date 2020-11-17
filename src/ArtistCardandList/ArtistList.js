// returns LIST of artist cards, which are clickable. clicking triggers subsequent fetch calls (artist, albums, shows) using id

import React from 'react';
import AppContext from '../AppContext';
import './artistlist.css';
import ArtistCard from './ArtistCard';

class ArtistList extends React.Component {
    static contextType = AppContext;

    render() {

        const list = 
        this.context.artistOptions 
        ?
        <div className='artist-list'>
            Did you mean...
            <ArtistCard />
            </div>
        : 
        <></>

        return (
            list
        )
    }
}

export default ArtistList;