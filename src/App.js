import React, { useState } from 'react';
import data from "./data"
import Box from './Box';

export default function App() {
    const [boxes, setBoxes] = useState(data)

    // hover handler for each box
    function handleHover(id, bgColor) {
        setBoxes(prevState => {
            return prevState.map(item => {
                if(item.id === id) {
                    let newColor;
                    if(item.color) newColor = undefined;
                    else newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
                    return { ...item, color: newColor };
                };
                return { ...item };
            })
        })
    }

    // creating an array of all the boxes
    const boxesElems = boxes.map(item => (
        <Box 
            key={item.id}
            handleHover={handleHover}
            id={item.id}
            color={item.color}
        />
    )) 

    return (
        <main className='main'>
            {boxesElems}
        </main>
    )
}