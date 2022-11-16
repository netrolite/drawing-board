import React from "react"
import Box from "./Box"

export default function App() {
    const boxesElements = [];
    for (let i = 0; i < 1000; i++) {
        boxesElements.push(<Box key={i}/>)
    }

    return (
        <main>
            {boxesElements}
        </main>
    )
}
