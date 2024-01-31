import React, { useState } from "react";
import { MyInput } from "../../myInput/MyInput";
import { Selector } from "../../selector/Selector";
import { MyButton } from "../../myButton/MyButton";
import "./MainStep.style.css"
import { Levels } from "../../../constants";


export const MainStep = ({nextStep, settings, setSettings}) => {
    const onLevelChange = (event) => {
        setSettings({...settings, level: event.target.value})
    }

    const onNameChange = (event) => {
        setSettings({...settings, name: event.target.value})
    }

    return (
        <div className="MainStep">
            <MyInput 
            placeholder="Enter your name" 
            changeHandler={onNameChange}
            />
            <Selector 
            options={Levels} 
            changeHandler={onLevelChange}
            />
            <MyButton 
            clickHandler={nextStep} 
            isDisabled={!settings.name.length} 
            text="Start"
            />
        </div>
    )
}