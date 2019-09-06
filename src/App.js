import React from 'react';
import logo from './logo.svg';
import { createStore } from "redux";
import './App.css';

function App() {
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + action.payload
      case 'DECREMENT':
        return state - action.payload
      default:
        return state
    }
  }
  const initialState = 0
  const store = createStore(reducer, initialState);

  store.subscribe(() => {
    console.log("State has changed " + store.getState());

  })
  // azione di incremento
  const incrementCount = (count) => {
    return {
      type: "INCREMENT",
      payload: count
    }
  }
  const decrementCount = (count) => {
    return {
      type: "DECREMENT",
      payload: count
    }
  }
  store.dispatch(incrementCount(1));
  store.dispatch(incrementCount(1));
  store.dispatch(incrementCount(1));
  store.dispatch(decrementCount(2));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
