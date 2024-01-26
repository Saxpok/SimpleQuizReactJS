import React from "react";
import "./Question.style.css"

export const Question = ({answerClick, questionText, answers}) => {

    const spawnAnswers = () => {

        return answers.map((item, i) => {
            return (
                <div 
                    key={i} 
                    onClick={answerClick(questionText, item)}
                    className="Variant"
                >
                    <div id={item.trigger}>{item.msg}</div>
                </div>
            )
        })
    }

    return (
        <div className="Question">
            <div>{questionText}</div>
            <div>{spawnAnswers()}</div>
        </div>
    )
}