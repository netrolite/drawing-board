import React, { useState } from "react";

export default function Box() {
    const [bgColor, setBgColor] = useState("transparent");

    function changeColor() {
        setBgColor(prevColor => {
            console.log(prevColor);
            if(prevColor === "transparent") {
                return '#' + Math.floor(Math.random()*16777215).toString(16);
            }
            else return "transparent";
        })
    }

    return (
        <div
            className="box"
            onMouseOver={changeColor}
            style={{backgroundColor: bgColor}}
        >
        </div>
    )
}
