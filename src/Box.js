import React from "react";

export default function Box(props) {
    let style = {
        backgroundColor: props.on ? "#" + Math.floor(Math.random() * 16777215).toString(16) : "transparent"
    }
    
    return (
        <div
            className="box"
            key={props.id}
            id={props.id}
            isOn={props.on}
            onMouseEnter={ () => props.handleHover(props.id) }
            style={style}
        ></div>
    )
}