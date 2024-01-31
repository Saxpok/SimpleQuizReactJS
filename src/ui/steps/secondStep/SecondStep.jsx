import React, { useState } from "react";
import { Question } from "../../question/Question";
import { MyButton } from "../../myButton/MyButton";

export const SecondStep = ({data , changeStepHandler, answeredQuestionsReader}) => {
    const [chosenAnswers, setChosenAnswers] = useState(null)
    const [questionNumber, setQuestionNumber] = useState(0)

    const changeStep = () => {
        if (questionNumber < data.length - 1) {
            setQuestionNumber((prev) => prev + 1)
        } else {
            changeStepHandler()
            }
    }

    const getQuestionData = () => {
        
        const currentQuestion = data[questionNumber]

        return {
            questionText: currentQuestion.question,
            answers: currentQuestion.answers,
            onAnswerClick: (answer) => () => {
                setChosenAnswers((prevAnswers) => {
                    const newAnswer = {
                        questionText: currentQuestion.question,
                        userAnswer: answer
                    }
                    answeredQuestionsReader(currentQuestion.question, answer)

                    return prevAnswers ? [...prevAnswers, newAnswer] :  [newAnswer]
                })
            }
        }
    }

    return (
        <div className="SecondStep">
            <Question {...getQuestionData()} questionNumber={questionNumber} chosenAnswers={chosenAnswers} />
            <MyButton clickHandler={changeStep} text="Next"/>
        </div>
    )
}