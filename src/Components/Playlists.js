import React, { useState } from "react";
import playlistsData from "../playlistsData";

export default function Playlists({ setData, setIndex, setScreen }) {

    const [showPlaylists, setShowPlaylists] = useState(false);

    const [playlistElements, setPlaylistElements] = useState("");


    function goToSong(songArr, id) {
        songArr.unshift({"title": "beginning", album_image: "album_3.png"});
        songArr.push({"title": "end", album_image: "album_3.png"});

        setData(songArr);
        setIndex(id);
        setScreen("/");
    }

    function goToPlaylist(playlist, image, playlistName) {
        console.log(playlist);

        let id = 0;
        const songsElements = playlistsData[id].songs.map(song => {
            console.log(song.title)
            if(song.title != "end") {
                if(song.title != "beginning") {
                    return <div className="song-btn" onClick={() => goToSong(playlistsData[id].songs, song.id)} key={song.id}>{song.title}</div>
                }
            }
            id = id + 1;
        })


        setPlaylistElements(() => {
            return (
                <div className="individual-album-container">
                    <img src={image} alt={playlistName} />
                    <h2>{playlistName}</h2>
                    {songsElements}
                </div>
            )
        });

        setShowPlaylists(prevState => !prevState);

        
    }


    const playlists = playlistsData.map(playlist => {
        let image = require(`./../images/${playlist.playlist_image}`);
        return (
            <div className="playlist-btn" onClick={() => goToPlaylist(playlist.playlist, image, playlist.playlis)} key={playlist.id}>
                <img src={image} alt={playlist.playlist} />
                <h2>{playlist.playlist}</h2>
            </div>
        )
    })

    return (
        <div className="playlist--container">
            {showPlaylists ? playlistElements : playlists}
        </div>
    )
}