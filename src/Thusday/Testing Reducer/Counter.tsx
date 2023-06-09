import React, {useReducer, useState} from 'react';
import './Counter.css'
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

type action = {
    type: string
}
type State = {
    value: number
    hide: boolean
}

export const reducer = (state: State, action: action): State => {
    switch (action.type) {
        case 'PLUS_VALUE':
            return {...state, value: state.value + 1}
        case 'SUBTRACT_VALUE':
            return  {...state, value: state.value - 1}
        case 'RESET_VALUE':
            return {...state, value: 0}
        case "HIDE_BODE_COUNTER":
            return {...state, hide:  true}
        default:
            throw new Error('Unknown action type')
    }
}

export const Counter = () => {
    const initialState: State = {value: 0, hide: false};
    const [state, dispath] = useReducer(reducer, initialState)

    const moveDisplaysCounter = () => dispath({type: "HIDE_BODE_COUNTER"})
    const plusValue = () => dispath({type: 'PLUS_VALUE'})
    const subtractValue = () => dispath({type: 'SUBTRACT_VALUE'})
    const resetValue = () => dispath({type:'RESET_VALUE'})

    return (
        <div className='wrapper'>
            <div onClick={moveDisplaysCounter}><h2>Counters</h2></div>
            {state.hide &&
                <>
                    <div>Number: {state.value} </div>
                    <div className="blockCounter">
                        <button onClick={plusValue}>+</button>
                        <button onClick={subtractValue}>-</button>
                        <button onClick={resetValue}>0</button>
                    </div>
                </>
            }

        </div>
    );
};

