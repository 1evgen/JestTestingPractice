import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from "./Thusday/Testing Reducer/Counter";

function App() {

  let list = [
    {id: '1', title: 'Angular', isDone: true},
    {id: '2', title: 'React', isDone: true},
    {id: '3', title: 'JavaScript', isDone: true},
    {id: '4', title: 'Redux', isDone: true},
    {id: '5', title: 'Css', isDone: true}
  ]


  return (
      <div className="App">

        <Counter/>

      </div>
  );
}

export default App;
