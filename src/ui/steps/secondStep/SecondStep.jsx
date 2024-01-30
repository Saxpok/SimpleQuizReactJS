import React, { useState } from "react";
import { Question } from "../../question/Question";
import { MyButton } from "../../myButton/MyButton";

export const SecondStep = ({data}) => {
    const [chosenAnswers, setChosenAnswers] = useState(null)
    const [questionNumber, setQuestionNumber] = useState(0)

    console.log(chosenAnswers)

    const changeStep = () => {
        setQuestionNumber((prev) => prev + 1)
    }

    const getQuestionData = () => {
        const currentQuestion = data[questionNumber];

        return {
            questionText: currentQuestion.question,
            answers: currentQuestion.answers,
            onAnswerClick: (answer) => () => {
                setChosenAnswers((prevAnswers) => {
                    const newAnswer = {
                        questionText: currentQuestion.question,
                        userAnswer: answer
                    }

                    return prevAnswers ? [...prevAnswers, newAnswer] :  [newAnswer]
                })
            }
        }
    }

    return (
        <div className="SecondStep">
            <Question {...getQuestionData()} chosenAnswers={chosenAnswers} />
            <MyButton clickHandler={changeStep} text="Next"/>
        </div>
    )
}