import React, { useEffect, useState } from "react"
import Box from "./Box"

export default function App() {
    const [boxesElems, setBoxesElems] = useState([]);

    useEffect(() => {
        if(document.body.offsetHeight < window.innerHeight) {
            setBoxesElems(prevState => {
                return [...prevState, <Box />]
            })
        } 
    }, [boxesElems])
    
    return (
        <main className="main">
            {boxesElems}
        </main>
    )
}
