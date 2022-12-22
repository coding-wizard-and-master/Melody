import React from "react";
import Songs from "./Songs";
import Albums from "./Albums"
import Artists from "./Artists"
import Playlists from "./Playlists"

export default function Selector(props) {
    // const [path, setPath] = React.useState();
    let path = props.screen;
    let slicedPath = path.slice(1);
    let displayPath = slicedPath.charAt(0).toUpperCase() + slicedPath.slice(1);
    

    return(
        <div className="selector--interface">
            <h1>{displayPath}</h1>
            {displayPath === "Playlists" && <Playlists setData={props.setData} setIndex={props.setIndex} setScreen={props.setScreen} />}
            {displayPath === "Artists" && <Artists setData={props.setData} setIndex={props.setIndex} setScreen={props.setScreen} />}
            {displayPath === "Albums" && <Albums setIndex={props.setIndex} setScreen={props.setScreen} setData={props.setData} />}
            {displayPath === "Songs" && <Songs setIndex={props.setIndex} setData={props.setData} setScreen={props.setScreen}/>}
            <a onClick={() => props.setScreen("/")}><button>Back</button></a>
        </div>
    )
}