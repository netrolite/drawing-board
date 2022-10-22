import React, { useState } from 'react';
import data from "./data"
import Box from './Box';

export default function App() {
    const [boxes, setBoxes] = useState(data)

    function handleHover(id) {
        setBoxes(prevState => {
            prevState.forEach(item => {
                if(item.id === id) item.on = !item.on
            })
            return [...prevState]
        })
    }

    const boxesElems = boxes.map(item => (
        <Box 
            key={item.id}
            id={item.id}
            handleHover={handleHover} 
        />
    )) 

    return (
        <main className='main'>
            {boxesElems}
        </main>
    )
}