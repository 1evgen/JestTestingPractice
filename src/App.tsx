import React from 'react';
import './App.css';
import {Counter} from "./Thusday/Testing Reducer/Counter";
import {ExampleComponent} from "./learnTestingRenderComponent/ExampleComponent";


function App() {

  let list = [
    {id: '1', title: 'Angular', isDone: true},
    {id: '2', title: 'React', isDone: false},
    {id: '3', title: 'JavaScript', isDone: true},
    {id: '4', title: 'Redux', isDone: false},
    {id: '5', title: 'Css', isDone: true}
  ]


  return (
      <div className="App">
        {/*<Counter list={list}/>*/}
         <ExampleComponent  name={'Egor'}/>
          <ExampleComponent  name={''}/>
      </div>
  );
}

export default App;
