// Import the React libraries
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import store from "../store/CounterReducer";
import IncrementDecrement from "./IncrementDecrement";

// Create a function for navigation
const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
      <h1>{counter}</h1>
    </div>
  );
};

export default App;
