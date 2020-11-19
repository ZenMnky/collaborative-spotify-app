// returns single artist card with image, artist name, and genre
// attach id to each card for search purposes (will not make a difference in resultspage view)

import React from 'react';
import './css/artistcard.css'

class ArtistCard extends React.Component {
    render() {
        const {name, id, genre, image} = this.props;
        return (
            <div key={id} onClick={() => this.handleClick}
            className='artist-card'>

            <img src={image} width='100px' alt='artist-card-img' />

            <div className='name-genre'>
            <p>{name}</p>
            <p><i>{genre}</i></p>
            </div>

            </div>
        )
    }
}

export default ArtistCard;