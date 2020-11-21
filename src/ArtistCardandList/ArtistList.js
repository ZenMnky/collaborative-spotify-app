// returns LIST of artist cards, which are clickable. 
// clicking triggers subsequent fetch calls (artist, albums, shows) using id

import React from 'react';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

import './css/artistlist.css';

import ArtistCard from './ArtistCard';

class ArtistList extends React.Component {
    static contextType = AppContext;

    handleClick = (id, name, artistCardStuff) => {

        const {
            updateSelectedArtistCardData,
            handleFetchArtistAlbums,
            handleFetchArtistTopTracks,
            handleFetchRelatedArtists
        } = this.context;

        updateSelectedArtistCardData(artistCardStuff);

        // promise.all to make all the fetch calls, 
        // then push to results page with artist name as dynamic path part
        Promise.all([
            handleFetchArtistAlbums(id),
            handleFetchArtistTopTracks(id),
            handleFetchRelatedArtists(id)
        ]).then(() => this.props.history.push(`/result/${name}`))
    }

    render() {
        const { artistOptions } = this.context;

        // Ternary operators used to aid in the loading process
        // without, the component will try to render prior to having the required data

        const artists = artistOptions
            ?
            artistOptions.map(artist => {
                return <ArtistCard
                    handleClick={(e) => this.handleClick(artist.id, artist.name, artist)}
                    //^ call the fn() to fetch to rest of the artist info, using artist id
                    key={artist.id}
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

export default withRouter(ArtistList);