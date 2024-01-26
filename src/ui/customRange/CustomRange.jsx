import React, { useState } from "react";
import "./CustomRange.style.css"

export const CustomRange = ({inputChanger}) => {
    const [range, setRange] = useState(0)

    function adjust (event) {
        setRange(event.target.value)
        
    }

    return (
        <div className="CustomRange">
            <input onChange={adjust} type="range" step="1" min="0" max="100"></input>
            <input onChange={inputChanger} value={range}></input>
        </div>
    )
}