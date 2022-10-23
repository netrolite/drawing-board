import React from "react";

export default function Box(props) {

    return (
        <div
            className="box"
            key={props.id}
            id={props.id}
            onMouseOver={ () => props.handleHover(props.id, props.color) }
            style={{ backgroundColor: props.color }}
        ></div>
    )
}