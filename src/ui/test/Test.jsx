import React from "react";
import "./Test.style.css"

export const Test = ({trigger, value, handleClick}) => {


    return (
        <div className="Test">
            <input value={value === trigger? trigger : value}></input>
            <button trigger={trigger} 
            onClick={handleClick}>Add +1</button>
        </div>
    )
}