// returns small lil card div with image and text below it. each card will ideally be a link

import React from 'react';
import './css/resultcard.css';

class ResultCard extends React.Component {
    render() {

        return (
            <div className='result-card'>

                <img src='https://gdurl.com/0yhK' alt='result-card-img' />

                <p>Text here</p>

            </div>
        )
    }
}

export default ResultCard;