import React, { useState } from "react";
import albumData from "../albumData";

export default function Artists({ setData, setIndex, setScreen }) {
    const [showArtists, setShowArtists] = useState(false);

    const [albumElements, setAlbumElements] = useState("");

    const artistArr = [];

    function goToSong(songArr, id) {
        songArr.unshift({"title": "beginning", album_image: "album_3.png"});
        songArr.push({"title": "end", album_image: "album_3.png"});

        setData(songArr);
        setIndex(id);
        setScreen("/");
    }

    function goToAlbum(album, id, image) {
        console.log(album, id, image);

        const songsElements = albumData[id-1].songs.map(song => {
            console.log(song.title)
            if(song.title != "end") {
                if(song.title != "beginning") {
                    return <div className="song-btn" onClick={() => goToSong(albumData[id-1].songs, song.id)} key={song.id}>{song.title}</div>
                }
            }
        })


        setAlbumElements(() => {
            return (
                <div className="individual-album-container">
                    <img src={image} alt={album} />
                    <h2>{album}</h2>
                    {songsElements}
                </div>
            )
        });

        // setShowAlbums(prevState => !prevState);
    }




    function goToArtist(artist_name, arr) {

        // console.log(artist_name);
        // console.log(arr);

        console.log(albumData)

        setAlbumElements(albumData.map(album => {
            if(artist_name === album.artist_name) {
                console.log(album)
                // console.log(album.artist_image)
                
                let image = require(`./../images/${album.album_image}`);
                // console.log(image)
                return (
                    <div className="album-btn" onClick={() => goToAlbum(album.album, album.id, image)} key={album.id}>
                        <img src={image} alt={album.title} />
                        <h2>{album.album}</h2>
                        <h3>{album.name}</h3>
                    </div>
                )
            }
        }))



        setShowArtists(prev => !prev);


    }

    let artistName = [];

    albumData.forEach(name => {
        artistName.push(name.artist_name);
    })

    // console.log(artistName)
    const counts = {};

    // for (const num of artistName) {
    //     counts[num] = counts[num] ? counts[num] + 1 : 1;
    //     console.log(counts[num])
    // }

    // console.log(counts)
    
    for (const num of artistName) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
        console.log(counts[num])
    }

    let yes = Object.values(counts);
    // let no = Object.keys(counts);

    // let i = 0;
    // albumData.forEach((artist) => {
    for(let i = 0; i < yes.length; i++) {
        if(yes[i] < 2) {
            artistArr.push({"id": albumData[i].id, "artist_image": albumData[i].artist_image, "title": albumData[i].artist_name});
        }
    }

    if(yes[yes.length-1] < 2) {
        artistArr.push({"id": albumData[albumData.length-1].id, "artist_image": albumData[albumData.length-1].artist_image, "title": albumData[albumData.length-1].artist_name});
    }

    


        // console.log(artist.artist_name)
        // console.log(artistArr.indexOf(artist.artist_name));
        // if(artistArr.includes(artist.artist_name)) {
        // console.log(counts[0])
        // Object.values(counts)[0];
        
        // console.log(yes)
        // if(yes[i] < 2) {
            
        //     console.log(artist.artist_name)
        //     artistArr.push({"id": artist.id, "artist_image": artist.artist_image, "title": artist.artist_name});
        // }
    
        // }
        // artistArr.push({"id": artist.id, "artist_image": artist.artist_image, "title": artist.artist_name});

    //     i = i+1;
    // })

    // const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
    // const counts = {};

    // for (const num of artistName) {
    //     counts[num] = counts[num] ? counts[num] + 1 : 1;
    // }

    // console.log(counts);
    // console.log(counts[5], counts[2], counts[9], counts[4]);


    // var result = [];
    // artistArr.forEach(function(item) {
    //     console.log(item.title)
    //     console.log(result.indexOf(item.title))
    //     if(result.indexOf(item.title) < 0) {
    //         result.push(item);
    //     }
    // });

    // console.log(result)

    const artistElements = artistArr.map(artist => {
        let image = require(`./../images/${artist.artist_image}`);
        return (
            <div className="artist-btn" onClick={() => goToArtist(artist.title, artistArr, artist.id, image)} key={artist.id}>
                <img src={image} alt={artist.title} />
                <h2>{artist.title}</h2>
                <h3>{artist.name}</h3>
            </div>
        )
    })

    return (
        <div className={showArtists ? "album--container" : "artists--container"}>
            {showArtists ? albumElements : artistElements}
        </div>
    )
}