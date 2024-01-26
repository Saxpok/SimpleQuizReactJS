import React from "react";
import "./Question.style.css"

export const Question = ({ questionText, answers, onAnswerClick, chosenAnswers }) => {
    const getClassName = ({ msg }) => {
        if (!chosenAnswers) return 'Variant';

        const { userAnswer: { trigger: chosenTrigger, msg: chosenMsg } } = chosenAnswers;
        if (chosenMsg === msg) {
            return chosenTrigger === 'correct' ? 'VariantCorrect' : 'VariantUnCorrect'
        }
    }

    const spawnAnswers = () => {
        return answers.map((item, i) => {
            return (
                <div 
                    key={i} 
                    onClick={onAnswerClick(item)}
                    className={getClassName(item)}
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