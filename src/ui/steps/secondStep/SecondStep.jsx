import React, { useState } from "react";
import { Question } from "../../question/Question";
import { MyButton } from "../../myButton/MyButton";

export const SecondStep = ({data}) => {
    const [chosenAnswers, setChosenAnswers] = useState(null)
    const [questonNumber, setQuestionNumber] = useState(0)

    const saveAnsver =  (text, chosen) => (e) => {

        setChosenAnswers({
            questionText: text,
            chosenAnswer: chosen
        })
    } 
    
    console.log(chosenAnswers)

    const changeStep = () => {
        setQuestionNumber(questonNumber++)
    }


    const getQuestionData = () => {
        return {
            questionText: data[questonNumber].question,
            answers: data[questonNumber].answers
        }
    }

    return (
        <div className="SecondStep">
            <Question answerClick={saveAnsver}{...getQuestionData()}/>
            <MyButton clickHandler={changeStep} text="Next"/>
        </div>
    )
}