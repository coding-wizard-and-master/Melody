import React from "react";
import songData from "../songData";

export default function Songs({ setIndex, setScreen, setData }) {
    function goToSong(song, songArr, id) {

        setData(songData);

        setIndex(id);
        setScreen("/");
    }

    const songArr = [];
    let id = -1;

    songData.forEach((song) => {
        id = id + 1;
        if(id > 0 && id < songData.length - 1) {
            songArr.push({"title": song.title, "id": id});
        }
    })

    const songsElements = songArr.map(song => {
        return <div className="song-btn" onClick={() => goToSong(song, songArr, song.id)} key={song.id}>{song.title}</div>
    })
    return (
        <div className="container">
            {songsElements}
        </div>
    )
}