// returns LIST of artist cards, which are clickable. clicking triggers subsequent fetch calls (artist, albums, shows) using id

import React from 'react';
import {AppContext} from '../Context/AppContext';
import './css/artistlist.css';
import ArtistCard from './ArtistCard';

class ArtistList extends React.Component {
    static contextType = AppContext;

    render() {
        const {artistOptions} = this.context;

        const artists = artistOptions 
        ?
        artistOptions.map(artist => {
            return <ArtistCard
                handleClick={() => alert(artist.id)} 
                //^ call the fn() to fetch to rest of the artist info, using artist id
                id={artist.id}
                name={artist.name}
                genre={artist.genres[0]}
                image={artist.images.length > 0 ? 
                    artist.images[0].url 
                    : 'http://truecontractors.ca/wp-content/uploads/2016/05/ds-placeholder-person.jpg'}
            />
        }) : '';

        const list = 
        artistOptions 
        ?
        <div className='artist-list'>
            Did you mean...
            {artists}
            </div>
        : 
        <></>

        return (
            list
        )
    }
}

export default ArtistList;