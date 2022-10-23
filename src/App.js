import React, { useState } from 'react';
import data from "./data"
import Box from './Box';

export default function App() {
    const [boxes, setBoxes] = useState(data)

    // hover handler for each box
    function handleHover(id, bgColor) {
        setBoxes(prevState => {
            const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16)
            bgColor ? prevState[id].color = undefined : prevState[id].color = randomColor;
            return [...prevState]
        })
    }

    // creating an array of all the boxes
    const boxesElems = boxes.map(item => {
        return (
            <Box 
                key={item.id}
                handleHover={handleHover}
                id={item.id}
                color={item.color}
            />
        )
    }) 

    return (
        <main className='main'>
            {boxesElems}
        </main>
    )
}