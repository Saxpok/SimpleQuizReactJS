import React from "react";
import "./ModalButton.style.css"

export const ModalButton = () => {
    
    const modal = () => {
        sessionStorage.setItem('form', prompt('Ok?'))
        console.log(sessionStorage.getItem('form'))
    }

    return (
        <div className="ModalButton">
            <button onClick={modal}>Try Me</button>
        </div>
    )
}