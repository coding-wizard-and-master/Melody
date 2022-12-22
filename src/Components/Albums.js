import React, { useState } from "react";
import albumData from "../albumData";

export default function Albums({ setIndex, setScreen, setData }) {

    const [showAlbums, setShowAlbums] = useState(false);

    const [theAlbum, setTheAlbum] = useState("");

    function goToSong(songArr, id) {
        songArr.unshift({"title": "beginning", album_image: "album_3.png"});
        songArr.push({"title": "end", album_image: "album_3.png"});

        setData(songArr);
        setIndex(id);
        setScreen("/");
    }





    function goToAlbum(album, id, image) {

        const songsElements = albumData[id-1].songs.map(song => {
            console.log(song.title)
            if(song.title != "end") {
                if(song.title != "beginning") {
                    return <div className="song-btn" onClick={() => goToSong(albumData[id-1].songs, song.id)} key={song.id}>{song.title}</div>
                }
            }
        })


        setTheAlbum(() => {
            return (
                <div className="individual-album-container">
                    <img src={image} alt={album} />
                    <h2>{album}</h2>
                    {songsElements}
                </div>
            )
        });

        setShowAlbums(prevState => !prevState);

    }

    const albumArr = [];

    albumData.forEach((album) => {
        albumArr.push({"id": album.id, "title": album.album, "album_image": album.album_image, "name": album.artist_name});
    })

    const albumElements = albumArr.map(album => {
        let image = require(`./../images/${album.album_image}`);
        return (
            <div className="album-btn" onClick={() => goToAlbum(album.title, album.id, image)} key={album.id}>
                <img src={image} alt={album.title} />
                <h2>{album.title}</h2>
                <h3>{album.name}</h3>
            </div>
        )
    })


    return(
        <div className="album--container">
            {showAlbums ? theAlbum : albumElements}
        </div>
    )
}