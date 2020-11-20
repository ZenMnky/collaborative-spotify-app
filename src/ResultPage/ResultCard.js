// returns small lil card div with image and text below it. each card will ideally be a link

import React from 'react';
import './css/resultcard.css';

class ResultCard extends React.Component {
    render() {
        const { image, name } = this.props;
        return (
            <div className='result-card'>

                <img src={image} alt='result-card-img' />


                <p>{name}</p>

            </div>
        )
    }
}

export default ResultCard;