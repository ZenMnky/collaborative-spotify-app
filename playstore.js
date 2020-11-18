// RESULTS OF A SEARCH ITEM (singular example)

{
    "artists": {
      "href": "https://api.spotify.com/v1/search?query=CAKE&type=artist&offset=0&limit=20",
      "items": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6A43Djmhbe9100UwnI7epV"
          },
          "followers": {
            "href": null,
            "total": 794422
          },
          "genres": [
            "alternative rock",
            "modern rock",
            "pop rock",
            "rock",
            "sacramento indie"
          ],
          "href": "https://api.spotify.com/v1/artists/6A43Djmhbe9100UwnI7epV",
          "id": "6A43Djmhbe9100UwnI7epV",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/48e3b385ab47322fde0605edcb59101efeff91c9",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/4f0adafec733359a23d2f51416b3f86f15c20532",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/1dac9f82d940e5f9f471ed6a55c990bb49367d29",
              "width": 160
            }
          ],
          "name": "Cake",
          "popularity": 67,
          "type": "artist",
          "uri": "spotify:artist:6A43Djmhbe9100UwnI7epV"
        },

        /**
         * proposed notation for ARTIST LIST => data.artists.items.map(artist => {
            return {
            id: artist.id,
            name: artist.name,
            genre: artist.genres[0], // will they always have a genre?
            image: artist.images[0].url // will they always have an image?
            }
        })

        THEN use ID to make fetch calls for:
        artist info
        top tracks
        albums
        related artists
         */
        




// RESULTS OF A SEARCH - ARTIST BY ID -> NOT NEEDED! will be able to use same data for artist card as originally fetched. retreival data for an artist by id fetch is the same (if not less informative)



// RESULTS OF A SEARCH - ARTIST ALBUMS BY ID (can limit to 4-5 in fetch! yay)

    {
    "href": "https://api.spotify.com/v1/artists/6A43Djmhbe9100UwnI7epV/albums?offset=0&limit=5&include_groups=album,single,compilation,appears_on",
    "items": [
      {
        "album_group": "album",
        "album_type": "album",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6A43Djmhbe9100UwnI7epV"
            },
            "href": "https://api.spotify.com/v1/artists/6A43Djmhbe9100UwnI7epV",
            "id": "6A43Djmhbe9100UwnI7epV",
            "name": "Cake",
            "type": "artist",
            "uri": "spotify:artist:6A43Djmhbe9100UwnI7epV"
          }
        ],
        "available_markets": [
          "AU",
          "NZ"
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/4Xr3CZKqW5UX18MpDbtcGM"
        },
        "href": "https://api.spotify.com/v1/albums/4Xr3CZKqW5UX18MpDbtcGM",
        "id": "4Xr3CZKqW5UX18MpDbtcGM",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27360ee6d189eab689966c7e3d7",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0260ee6d189eab689966c7e3d7",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485160ee6d189eab689966c7e3d7",
            "width": 64
          }
        ],
        "name": "Showroom Of Compassion",
        "release_date": "2011-04-22",
        "release_date_precision": "day",
        "total_tracks": 11,
        "type": "album",
        "uri": "spotify:album:4Xr3CZKqW5UX18MpDbtcGM"
      },
      {
        "album_group": "album",
        "album_type": "album",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6A43Djmhbe9100UwnI7epV"
            },
            "href": "https://api.spotify.com/v1/artists/6A43Djmhbe9100UwnI7epV",
            "id": "6A43Djmhbe9100UwnI7epV",
            "name": "Cake",
            "type": "artist",
            "uri": "spotify:artist:6A43Djmhbe9100UwnI7epV"
          }
        ],
        "available_markets": [
          "AU",
          "NZ"
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/5v8sbHHkMSiEEZw6ZgCQaa"
        },
        "href": "https://api.spotify.com/v1/albums/5v8sbHHkMSiEEZw6ZgCQaa",
        "id": "5v8sbHHkMSiEEZw6ZgCQaa",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27312ff848809ff370af6448e04",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0212ff848809ff370af6448e04",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485112ff848809ff370af6448e04",
            "width": 64
          }
        ],
        "name": "Showroom Of Compassion",
        "release_date": "2011-04-22",
        "release_date_precision": "day",
        "total_tracks": 11,
        "type": "album",
        "uri": "spotify:album:5v8sbHHkMSiEEZw6ZgCQaa"
      },

      proposed notation for ALBUMS SECTION => data.items.map(album => {
        return {
        name: album.name,
        release-date: album.release_date, // will they always have a genre?
        image: album.images[0].url, // will they always have an image?
        link: album.external_urls.spotify // can make each card a link! woot
        }
    })

// RESULTS OF A SEARCH => TOP TRACKS (single item for reference) ** need to reference ?market=US

{
    "tracks": [
      {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6A43Djmhbe9100UwnI7epV"
              },
              "href": "https://api.spotify.com/v1/artists/6A43Djmhbe9100UwnI7epV",
              "id": "6A43Djmhbe9100UwnI7epV",
              "name": "Cake",
              "type": "artist",
              "uri": "spotify:artist:6A43Djmhbe9100UwnI7epV"
            }
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5OCg9OWnL1PY4tW2ON8ssj"
          },
          "href": "https://api.spotify.com/v1/albums/5OCg9OWnL1PY4tW2ON8ssj",
          "id": "5OCg9OWnL1PY4tW2ON8ssj",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2732729439f771b3ee3057ca3a4",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e022729439f771b3ee3057ca3a4",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048512729439f771b3ee3057ca3a4",
              "width": 64
            }
          ],
          "name": "Comfort Eagle",
          "release_date": "2001-07-23",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:5OCg9OWnL1PY4tW2ON8ssj"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6A43Djmhbe9100UwnI7epV"
            },
            "href": "https://api.spotify.com/v1/artists/6A43Djmhbe9100UwnI7epV",
            "id": "6A43Djmhbe9100UwnI7epV",
            "name": "Cake",
            "type": "artist",
            "uri": "spotify:artist:6A43Djmhbe9100UwnI7epV"
          }
        ],
        "available_markets": [],
        "disc_number": 1,
        "duration_ms": 204133,
        "explicit": false,
        "external_ids": {
          "isrc": "USSM10104611"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3OOFEF20WqtsUPcRbPY3L7"
        },
        "href": "https://api.spotify.com/v1/tracks/3OOFEF20WqtsUPcRbPY3L7",
        "id": "3OOFEF20WqtsUPcRbPY3L7",
        "is_local": false,
        "is_playable": true,
        "name": "Short Skirt / Long Jacket",
        "popularity": 66,
        "preview_url": "https://p.scdn.co/mp3-preview/7420f9c65687e0b99707bfdaef11e17a02badf9e?cid=774b29d4f13844c495f206cafdad9c86",
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:3OOFEF20WqtsUPcRbPY3L7"
      },
/*
      proposed notation for TOP TRACKS SECTION => data.tracks.map(song => {
        return {
        name: song.name,
        image: song.images[0].url, // should we give top tracks an image, or make a simple linked list?
        link: song.external_urls.spotify // can make each track a link! woot
        }
    })

// RESULTS OF A SEARCH FOR RELATED ARTISTS => 

