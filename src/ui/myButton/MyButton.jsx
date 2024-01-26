import React from "react";
import "./MyButton.style.css"

export const MyButton = ({text , clickHandler, isDisabled = false}) => {
    return (
        <div className="MyButton">
            <button disabled={isDisabled} className="MyButton-button" onClick={clickHandler}>{text}</button>
        </div>
    )
}