import React from "react";

export default function Box(props) {
    return (
        <div
            className="box"
            key={props.id}
            id={props.id}
            isOn={props.on}
            onMouseEnter={ () => props.handleHover(props.id) }
        ></div>
    )
}