import React from "react";

export const Selector = ({options, changeHandler}) => {
    const spawnOptions = () => {
        return options?.map((item) => {
            return (
                <option value={item} key={item}>{item}</option>
            )
        })
    }
     

    return (
        <div className="Selector">
            <select onChange={changeHandler}>
                {spawnOptions()}
            </select>
        </div>
    )
}