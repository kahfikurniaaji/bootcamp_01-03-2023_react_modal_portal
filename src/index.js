// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./component/App";
import counterReducer from "./redux/CounterReducer";

const store = createStore(counterReducer);

// const redux = require("redux");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// const rootReducer = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// const store = redux.createStore(rootReducer);
// console.log("Initial State = ", store.getState());
// store.dispatch({ type: "INCREMENT" });
// console.log("State after Increment = ", store.getState());
