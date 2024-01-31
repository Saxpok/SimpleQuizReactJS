import React from "react";
import "./ThirdStep.style.css"

export const ThirdStep = ({userInfo, userResult}) => {
    const countPercent = (res) => {
        let corrcets = 0
        res.forEach((item) => {
            if (item.answer.trigger === 'correct') {
                corrcets++
            }
        }) 
        return corrcets / res.length * 100 + '%'
    }

    const makeResult = (res) => {
         return res.map((item) => {
            return (
                <div className="ResultAnswer">{`${item.question} || ${item.answer.msg} || ${item.answer.trigger}`}</div>
            )
        })
    }

    return <div 
    className="ThirdStep">
        <div>{`${userInfo.name} || ${userInfo.level} || Results`}</div>
        <div className="ResultAnswers">{makeResult(userResult)}</div>
        <div>You have {countPercent(userResult)} correct answers!</div>
    </div>
}