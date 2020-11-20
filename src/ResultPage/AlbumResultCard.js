// returns small lil card div with image and text below it. each card will ideally be a link

import React from 'react';
import cuid from 'cuid';
import './css/resultcard.css';

class AlbumResultCard extends React.Component {
    render() {
        const { image, name, externalURL } = this.props;
        return (
            <div key={cuid()} className='result-card'>
               
                <img src={image} alt='result-card-img' />
               
                <p>{name}</p>

            </div>
        )
    }
}

export default AlbumResultCard;