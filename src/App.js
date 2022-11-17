import React, { useEffect, useState } from "react"
import Box from "./Box"

export default function App() {
    const boxesElems = [];
    for (let i = 0; i < 4000; i++) {
        boxesElems.push(<Box key={i} />)
    }
    
    return (
        <main className="main">
            {boxesElems}
        </main>
    )
}
