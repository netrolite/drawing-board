import React from "react";

export default function Box(props) {
    return (
        <div
            className="box"
            key={props.id}
            id={props.id}
            onMouseEnter={ () => props.hover(props.id) }
        ></div>
    )
}