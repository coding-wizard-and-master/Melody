import React from "react";
// import Image from "./../images/album_0.png

export default function Album(props) {
    let image = require(`./../images/${props.img}`);
    // console.log(image)
    return (
        <div className="album">
            {image && <img src={image} alt="album" />}
        </div>
    )
}