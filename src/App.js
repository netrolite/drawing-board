import React, { useState } from 'react';
import data from "./data"
import Box from './Box';

export default function App() {
    const [boxes, setBoxes] = useState(data)

    // hover handler for each box
    function handleHover(id) {
        setBoxes(prevState => {
            prevState.forEach(item => {
                if(item.id === id) item.on = !item.on
            })
            return [...prevState]
        })
    }

    // creating an array of all boxes
    const boxesElems = boxes.map(item => (
        <Box 
            key={item.id}
            handleHover={handleHover}
            {...item}
        />
    )) 
    console.log(boxesElems)

    return (
        <main className='main'>
            {boxesElems}
        </main>
    )
}