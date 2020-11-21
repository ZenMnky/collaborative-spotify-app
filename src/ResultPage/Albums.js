// returns div with the artists recent albums (limit 5?) using results cards

/**
 * NOTE:
 * When we do a fetch for albums, specify the 'market': market=US
 * Otherwise, we'll get duplicate album listings
 * --There tends to be album versions specific to New Zeland :-\
 * 
 */


import React from 'react';
import {AppContext} from '../Context/AppContext';
import AlbumResultCard from './AlbumResultCard';
import cuid from 'cuid';

class Albums extends React.Component {
    static contextType = AppContext;

    render() {

        //for each album stored in context, 
        // grab the album image and title and pass to <AlbumResultCard />
        let resultsArray = 
            this.context.artistAlbums 
                ? this.context.artistAlbums.map(album => {
                    let albumImg = album.images[0].url;
                    let albumTitle = album.name;
                    let externalURL = album.external_urls.spotify;

                    return(
                        <a 
                            key={cuid()} 
                            href={externalURL} 
                            target='_blank' 
                            rel="noreferrer"
                        >
                            <AlbumResultCard 
                                key={albumTitle}
                                image={albumImg} 
                                name={albumTitle} 
                                externalURL={externalURL}
                            />
                        </a>
                    )
                }) 
                : 'not found'

        
        return (
            <div key={cuid()} className='details-slice'>
                <h3>ALBUMS</h3> 
                {resultsArray}
            </div>
        )
    }
}

export default Albums;