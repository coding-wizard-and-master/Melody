import React, { useState } from "react";
import AlbumDisplay from "./AlbumDisplay";
import Controls from "./Controls";

export default function UserInterface({ currentSong, index, setIndex, albums, songName, artistName, songsLength, loop, setLoop, shuffle, setShuffle }) {

    // const [index, setIndex] = useState(1);

    const [playPause, setPlayPause] = useState(false);

    // useEffect(function() {
    //     audio.pause();
    //     setAudio(new Audio(`./${currentSong}`));
    //     audio.load();
    // }, [currentSong]);

    function handleNext() {
        // if(playPause) {
        //     console.log(currentSong)

        //     audio.play();
        // }
        // audio.pause()

        


        // audio.remove();

        
        // setAudio(prev => prev = new Audio(`./${currentSong}`));

  

        // playPause ? audio.play() : audio.pause();

    
        if(index < songsLength-2) {
            setIndex(prevIndex => prevIndex + 1);
        }
        else {
            console.log(loop)
            if(loop === true) {
                setIndex(prevIndex => prevIndex = 1)
            }
        }
        
    }

    function handlePrev() {
        if(index > 1) {
            setIndex(prevIndex => prevIndex - 1);
        }
    }
    
    return (
        <>
            <AlbumDisplay index={index} albums={albums} songName={songName} artistName={artistName} songsLength={songsLength}/>
            <Controls currentSong={currentSong} playPause={playPause} setPlayPause={setPlayPause} shuffle={shuffle} setShuffle={setShuffle} loop={loop} setLoop={setLoop} handleNextClick={handleNext} handlePrevClick={handlePrev} />
        </>
    )
}