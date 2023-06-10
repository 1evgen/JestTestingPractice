import React, {useReducer, useState} from 'react';
import './Counter.css'
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

type list = {
    id: string,
    title: string,
    isDone: boolean
}

type typeCounter = {
    list: Array<list>

}


type action = {
    type: string
}
export type State = {
    value: number
    hide: boolean
}

export const reducer = (state: State, action: action): State => {
    switch (action.type) {
        case 'Count_VALUE':
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

export const Counter = (props: typeCounter) => {
    const initialState: State = {value: 0, hide: false};
    const [state, dispatch] = useReducer(reducer, initialState)

    const moveDisplaysCounter = () => dispatch({type: "HIDE_BODE_COUNTER"})
    const plusValue = () => dispatch({type: 'Count_VALUE'})
    const subtractValue = () => dispatch({type: 'SUBTRACT_VALUE'})
    const resetValue = () => dispatch({type:'RESET_VALUE'})

    return (
        <div className='wrapper'>
            <div>
                <ul>
                        {props.list.map((el)=> <li key={el.id}>
                        {el.title} <input type={"checkbox"} checked={el.isDone}/>  </li>)}
                </ul>


            </div>



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

