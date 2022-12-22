import React from "react";
import Shuffle from "../images/shuffle-btn.svg"
import Prev from "../images/prev-btn.svg"
import Play from "../images/play-btn.svg"
import Pause from "../images/pause-btn.svg"
import Next from "../images/next-btn.svg"
import Loop from "../images/loop-btn.svg"

import ReactPlayer from 'react-player';


export default function Controls({ currentSong, playPause, setPlayPause, handleNextClick, handlePrevClick, loop, setLoop, shuffle, setShuffle }) {

    
    // const [audio, setAudio] = useState(new Audio(`./${currentSong}`));
    // const [play, setPlay] = useState(audio.pause());

    // useEffect(function() {
    //     setAudio(new Audio(`./${currentSong}`));
    // }, [currentSong])

    function toggle() {

        setPlayPause(prev => !playPause);

        // melody/public/audio

        // let audio = new Audio(`./${currentSong}`);


        // playPause ? audio.pause() : audio.play();
    }

    function shuffleOn() {
        setShuffle(prevShuffle => !prevShuffle)
    }

    function loopOn() {
        setLoop(prevLoop => !prevLoop);
    }
    console.log(currentSong)
    return (
        <>4
            <ReactPlayer 
                preload="none" 
                url={currentSong ?? currentSong} 
                playing={playPause} 
                width="0" 
                height="0" 
            />
            <div className="controls">
                <img src={Shuffle} alt="Previous Button" className={shuffle ? 'on' : 'end--controls'} onClick={shuffleOn} />
                <img id="prev" src={Prev} alt="Previous Button" onClick={handlePrevClick}/>
                {playPause ? <img src={Pause} onClick={toggle} alt="Pause Button" /> : <img src={Play} onClick={toggle} alt="Play Button" />}
                <img src={Next} alt="Next Button" onClick={handleNextClick}/>
                <img src={Loop} alt="Loop Button" className={loop ? 'on' : 'end--controls'} onClick={loopOn} />
            </div>
        </>
    )
}