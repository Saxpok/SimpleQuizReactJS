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
            onAnswerClick: (chosenAnswer) => () => {
                setChosenAnswers((prevAnsvers) => {
                    if (prevAnsvers !== null) {
                        return [...prevAnsvers, {
                            questionText: currentQuestion.question, 
                            userAnswer: chosenAnswer
                        }]
                    } else { return [...prevAnsvers, {
                        questionText: currentQuestion.question, 
                        userAnswer: chosenAnswer
                    }]

                    }
                    // return [prevAnsvers , {
                    //     questionText: currentQuestion.question, 
                    //     userAnswer: chosenAnswer
                    // }]
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