import React from "react";
import Album from "./Album";



export default function AlbumDisplay({ index, albums, songName, artistName, songsLength }) {
    // console.log(data[0].album_image)
    // const [albums, setAlbums] = useState([data[index-1].album_image, data[index].album_image, data[index+1].album_image]);
    // const [songName, setSongName] = useState(data[index].songs[0].title);
    // const [artistName, setArtistName] = useState(data[index].artist_name);

    // useEffect(function() {
    //     setAlbums([data[index-1].album_image, data[index].album_image, data[index+1].album_image]);
    //     setSongName(data[index].songs[0].title);
    //     setArtistName(data[index].artist_name);
    // }, [index])

    return (
        <div className="album--display">
            {/* left album */}
            {index > 1 && <Album img={albums[0]} index={index} />}
            {/* middle album */}
            <Album img={albums[1]} index={index} />
            {/* right album */}
            {index < songsLength-2 && <Album img={albums[2]} index={index} />}     
            <section className="song-title">
                <h2>{songName}</h2>
                <h3>{artistName}</h3>
            </section>

        </div>
    )
}