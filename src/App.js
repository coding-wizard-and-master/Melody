import './App.scss';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import UserInterface from './Components/UserInterface';
import Selector from './Components/Selector';
import songData from './songData';

function App() {

  const [shuffle, setShuffle] = useState(false);

  const [loop, setLoop] = useState(false);
  
  const [screen, setScreen] = useState("/");

  const [index, setIndex] = useState(2);

  const[data, setData] = useState(songData);

  const [currentSong, setCurrentSong] = useState(data[index-1].audio);

  useEffect(function() {
    // setData()
    if(shuffle === true) {
      let firstItem = data.shift();
      let lastItem = data.pop();

      let shuffledSongs = data.sort(function () {
        return Math.random() - 0.5;
      });
      shuffledSongs.unshift(firstItem);
      shuffledSongs.push(lastItem);
    }
  }, [shuffle, data])


  const [albums, setAlbums] = useState([data[index-1].album_image, data[index].album_image, data[index+1].album_image]);
  const [songName, setSongName] = useState(data[index].title);
  const [artistName, setArtistName] = useState(data[index].artist_name);


  useEffect(function() {
      setAlbums([data[index-1].album_image, data[index].album_image, data[index+1].album_image]);
      setSongName(data[index].title);
      setArtistName(data[index].artist_name);

  
  }, [data, index, shuffle])

  useEffect(function() {

    setCurrentSong(data[index].audio);


  }, [index])



  const [hideShowInterface, setHideShowInterface] = useState(true);
  useEffect(function() {
    if(screen !== "/"){
      setHideShowInterface(false);
    }
    else {
      setHideShowInterface(true);
    }
  }, [screen])

  return (
    <div>
      <Header setScreen={setScreen} />
      {hideShowInterface ? <UserInterface currentSong={currentSong} shuffle={shuffle} setShuffle={setShuffle} loop={loop} setLoop={setLoop} showInterface={hideShowInterface} songsLength={data.length} index={index} setIndex={setIndex} albums={albums} songName={songName} artistName={artistName} /> : <Selector setData={setData} setIndex={setIndex} screen={screen} setScreen={setScreen}/>}
    </div>
  );
}

export default App;
