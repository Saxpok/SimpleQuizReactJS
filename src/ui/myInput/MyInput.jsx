import React from "react";
import "./MyInput.style.css"

export const MyInput = ({placeholder, changeHandler}) => {
    return (
        <div className="MyInput">
            <input placeholder={placeholder} onChange={changeHandler}></input>
        </div>
    )
}