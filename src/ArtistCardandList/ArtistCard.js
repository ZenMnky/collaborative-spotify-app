// returns single artist card with image, artist name, and genre
// attach id to each card for search purposes (will not make a difference in resultspage view)

import React from 'react';
import './artistcard.css'

class ArtistCard extends React.Component {
    render() {
        
        return (
            <div className='artist-card'>

            <img src='https://gdurl.com/0yhK' width='100px' alt='artist-card-img' />

            <div className='name-genre'>
            <p>Salem</p>
            <p>Hard Rock</p>
            </div>

            </div>
        )
    }
}

export default ArtistCard;